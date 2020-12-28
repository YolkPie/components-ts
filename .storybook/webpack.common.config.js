// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(mjs|jsx?)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: path.join(
                appDirectory,
                '/node_modules/.cache/storybook'
              ),
              babelrc: false,
              plugins: [
                [
                  require.resolve('babel-plugin-react-docgen'),
                  {
                    DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES'
                  }
                ]
              ]
            }
          }
        ],
        include: [appDirectory],
        exclude: [path.join(appDirectory, '/node_modules')]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader')
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: require.resolve('raw-loader')
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        sideEffects: true,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
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
          //     importLoaders: 1,
          //     modules: true,
          //     namedExport: true,
          //     sass: true,
          //     localIdentName: '[local]___[hash:base64:5]'
          //   }
          // },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              postcss: {},
              syntax: 'postcss-scss',
              plugins: () => [
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
                require('postcss-px-to-viewport')({
                  viewportWidth: 750,
                  viewportHeight: 1334,
                  unitPrecision: 3,
                  viewportUnit: 'vw',
                  selectorBlackList: ['.ignore', '.hairlines'],
                  minPixelValue: 1,
                  mediaQuery: false
                }),
                require('postcss-viewport-units'),
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
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: require.resolve('file-loader'),
        query: { name: 'static/media/[name].[hash:8].[ext]' }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: require.resolve('url-loader'),
        query: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
      },
      {
        test: /\.stories\.[j|t]sx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre'
      }
    ]
  }
}
