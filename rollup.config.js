import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';
import path from 'path';
import glob from 'glob';

const plugins = [
  progress(),
  postcss({
    extract: true,
    extensions: ['.css', '.scss'],
    moudles: {
      generateScopedName: '[local]___[hash:base64:5]'
    },
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
  }),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    presets: [
      ['@babel/env', { useBuiltIns: false }],
      '@babel/react',
      '@babel/typescript'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/proposal-object-rest-spread',
      '@babel/transform-react-jsx',
      '@babel/proposal-class-properties',
      'transform-react-remove-prop-types',
      [
        'react-css-modules',
        {
          generateScopedName: '[local]___[hash:base64:5]',
          exclude: 'node_modules',
          filetypes: {
            '.scss': {
              syntax: 'postcss-scss',
              plugins: ['postcss-nested']
            }
          }
        }
      ]
    ]
  }),
  resolve({
    preferBuiltins: true
  }),
  commonjs(),
  builtins(),
  terser()
];

function getEntry() {
  let globPath = 'src/components/*/index.js';
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
    entries[name] =
      dirname.replace(new RegExp('^' + pathDir), '$2') + '/index.js';
  }
  return entries;
}

// const files = { ...getEntry() };
const srcDir = path.resolve(__dirname, './src')
const files = path.resolve(srcDir, 'index')
const configs = Object.keys(files).map(key => {
  return {
    input: {
      [key]: files[key]
    },
    output: {
      dir: 'dist/build',
      format: 'esm',
      sourceMap: true,
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      }
    },
    treeshake: true,
    external: ['react', 'react-dom', 'prop-types', 'core-js'],
    plugins
  };
});

export default [
  // {
  //   input: {
  //     SeckillAddCartServer: 'src/components/seckill-add-cart-server/index.js'
  //   },
  //   output: {
  //     dir: 'build',
  //     format: 'esm',
  //     sourceMap: true,
  //     globals: {
  //       react: 'React',
  //       'prop-types': 'PropTypes'
  //     }
  //   },
  //   treeshake: true,
  //   external: ['react', 'react-dom', 'prop-types', 'core-js'],
  //   plugins
  // }
  ...configs
];
