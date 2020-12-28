const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const postcss = require('@7fresh/rollup-plugin-postcss')
const commonjs = require('rollup-plugin-commonjs')
const builtins = require('rollup-plugin-node-builtins')
const replace = require('rollup-plugin-replace')
const { terser } = require('rollup-plugin-terser')
// const progress = require('rollup-plugin-progress')

/**
 * viewportWidth: 141.42 计算来历
 * 变量表示： x:UI图测量尺寸，单位px； v:UI图整体宽度,单位px； y:要换算成的单位长度,单位vw;
 * 根据转换规律： x/v * 100 = y/100 *v
 * 要把x=750px => y=375px，也就是 x=1px => y=0.5px， 计算出v= 100 * √2
 */

const plugins = envprops => {
  const pxToViewport ={
        viewportWidth: 750,
        viewportHeight: 1334,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false
      }
  return [
    // progress(),
    postcss({
      extract: true,
      extensions: ['.css', '.scss'],
      moudles: true,
      syntax: 'postcss-scss',
      plugins: [
        require('postcss-px-to-viewport')(pxToViewport),
        require('postcss-modules')({
          generateScopedName: '[local]___[hash:base64:5]'
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
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        // [
        //   'transform-react-remove-prop-types',
        //   {
        //     additionalLibraries: ['react-transition-group']
        //   }
        // ],
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
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    builtins(),
    terser()
  ]
}

module.exports = plugins
