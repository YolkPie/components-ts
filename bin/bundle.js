const shell = require('shelljs')
const chalk = require('chalk')
const getEntry = require('./utils/get-entry')
const getBundled = require('./utils/get-bundled')
const rollupExec = require('./utils/rollup-exec')
const webpackExec = require('./utils/webpack-exec')
const { formatList, getArrList } = require('./utils/index')

const files = [...getEntry(), ...getEntry('tsx')]
let fileList = []
const bundleFiles = getBundled()

const bundle = env => {
  return new Promise((resolve, reject) => {
    shell.exec(`git status -s`, { silent: true }, (code, stdout, stderr) => {
      if (stderr) {
        console.log(chalk.red(stderr))
      } else {
        const typeList = ['M', 'D', 'A', '??']
        const dictList = {
          M: '修改',
          D: '删除',
          A: '新增',
          '??': '新建'
        }

        typeList.forEach(type => {
          const arr = formatList(getArrList(stdout, type), type)
          fileList = fileList.concat(arr)
          arr.forEach(item => {
            if (item.indexOf('src/components') > -1) {
              console.log(
                type === 'A'
                  ? chalk.green(`${dictList[type]}：${item}`)
                  : type === 'D'
                  ? chalk.red(`${dictList[type]}：${item}`)
                  : type === 'M'
                  ? chalk.yellow(`${dictList[type]}：${item}`)
                  : chalk.green(`${dictList[type]}：${item}`)
              )
            }
          })
        })

        const changeComponents = fileList.filter(
          file => file.indexOf('components') > -1
        )

        const changeFiles = files.filter(file => {
          return (
            changeComponents.filter(_file => {
              return file.split('/')[2] === _file.split('/')[2]
            }).length > 0
          )
        })

        const unBundledFiles = files.filter(file => {
          const filename = file
            .split('/')
            .slice(-2)[0]
            .split('-')
            .map(item => item.charAt(0).toUpperCase() + item.slice(1))
            .join('')
          return (
            !bundleFiles.filter(_file => {
              return filename === _file
            }).length > 0
          )
        })
        unBundledFiles.forEach(file => {
          console.log(chalk.blue(`未构建：${file}`))
        })

        // 有bug，未调通
        // webpackExec([...unBundledFiles]).then(res => {
        //   resolve();
        // });
        if ([...unBundledFiles, ...changeFiles].length === 0) {
          console.log(chalk.red('未有文件改动'))
          return resolve()
        }
        rollupExec([...unBundledFiles, ...changeFiles], env).then(() => {
          resolve()
        })
      }
    })
  })
}

module.exports = bundle
