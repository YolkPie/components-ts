const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getScssEntry() {
  let globPath = './src/components/*/index.scss';
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  let pathDir = 'src(/|\\\\)(.*?)(/|\\\\)scss';
  let files = glob.sync(globPath);
  let dirname,
    entries = {};
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]);
    let name = dirname
      .split('/')
      .slice(-1)[0]
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join('');
    entries[name] =
      dirname.replace(new RegExp('^' + pathDir), '$2') + '/index.scss';
  }
  return entries;
}

function getEntry() {
  let globPath = './src/components/*/index.js';
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  let pathDir = 'src(/|\\\\)(.*?)(/|\\\\)js';
  let files = glob.sync(globPath);
  let dirname,
    entries = {};
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]);
    let name = dirname
      .split('/')
      .slice(-1)[0]
      .split('-')
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join('');
    entries[name] = dirname.replace(new RegExp('^' + pathDir), '$2');
  }
  return entries;
}

const srcDir = path.resolve(__dirname, './src')

module.exports = {
  // entry: { ...getEntry() },
  entry: path.resolve(srcDir, 'index'),
  output: {
    path: path.resolve(__dirname, 'dist/build'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass']
    // extensions: ['.js', '.scss', '.sass']
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(tsx|ts)?$/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              }
            }
          },
          // {
          //   loader: 'typings-for-css-modules-loader',
          //   options: {
          //     modules: true,
          //     namedExport: true,
          //     // sass: true,
          //     // importLoaders: 1,
          //     camelCase: true,
          //     minimize: true,
          //     localIdentName: '[local]___[hash:base64:5]'
          //   }
          // },
          {
            loader: 'postcss-loader',
            options: {
              extract: true,
              extensions: ['.css', '.scss'],
              syntax: 'postcss-scss',
              plugins: [
                require('postcss-px-to-viewport')({
                  viewportWidth: 750,
                  viewportHeight: 1334,
                  unitPrecision: 3,
                  viewportUnit: 'vw',
                  selectorBlackList: ['.ignore', '.hairlines'],
                  minPixelValue: 1,
                  mediaQuery: false
                }),
                require('postcss-nested'),
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009'
                  },
                  stage: 3
                }),
                require('postcss-aspect-ratio-mini'),
                require('postcss-write-svg')({ utf8: false }),

                require('postcss-viewport-units')({
                  silence: true
                }),
                require('css-declaration-sorter')({
                  order: 'smacss'
                }),
                require('cssnano')({
                  preset: [
                    'advanced',
                    {
                      reduceIdents: false,
                      zindex: false
                    }
                  ],
                  autoprefixer: false,
                  'postcss-zindex': false
                })
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending futher investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true
      }),
      // This is only used in production mode
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: true
            ? {
                // `inline: false` forces the sourcemap to be output into a
                // separate file
                inline: true,
                // `annotation: true` appends the sourceMappingURL to the end of
                // the css file, helping the browser find the sourcemap
                annotation: true
              }
            : false
        }
      })
    ],
    runtimeChunk: false
  }
};
