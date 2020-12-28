#! /usr/bin/env node
const commander = require('commander')
const fs = require('fs')
const initPackage = require('./utils/init-package')
const chalk = require('chalk')
const bundle = require('./bundle')
const shell = require('shelljs')
const { Select } = require('enquirer')

commander.version('0.0.1', '-v, --version').parse(process.argv)
  ; (async () => {
    const env = await new Select({
      name: 'env',
      message: '发布环境？',
      choices: ['预发', '线上']
    }).run()
    await bundle(env)
    const package = await initPackage(env)
    fs.writeFileSync('dist/package.json', JSON.stringify(package, null, 4))
    console.log(chalk.green(package.name), chalk.green(package.version))
    shell.exec('cd dist && jnpm link')
  })()
