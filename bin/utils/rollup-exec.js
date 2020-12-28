const rollup = require('rollup')
const plugins = require('./rollup-plugins')
const chalk = require('chalk')

const rollupExec = async (files, env) => {
  const file = files.splice(0, 1)[0]
  const filename = file
    .split('/')
    .slice(-2)[0]
    .split('-')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('')
  console.log(chalk.green(`组件：${filename} 构建成功`))
  const bundle = await rollup.rollup({
    input: {
      [filename]: file
    },
    treeshake: true,
    external: ['react', 'react-dom', 'prop-types'],
    plugins: plugins(env)
  })
  await bundle.write({
    dir: 'dist/build',
    format: 'esm',
    sourceMap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes'
    }
  })
  if (files.length > 0) {
    await rollupExec(files, env)
  }
}

module.exports = rollupExec
