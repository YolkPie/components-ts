#! /usr/bin/env node
const semver = require('semver')
const commander = require('commander')
const chalk = require('chalk')
const { Select } = require('enquirer')
const fs = require('fs')
const initPackage = require('./utils/init-package')
const bundle = require('./bundle')
const shell = require('shelljs')

commander.version('0.0.1', '-v, --version').parse(process.argv)
  ; (async () => {
    const env = await new Select({
      name: 'env',
      message: '发布环境？',
      choices: ['预发', '线上']
    }).run()
    await shell.rm('-rf', 'dist') //删除dist
    await bundle(env)
    const package = await initPackage(env)
    const versionType = await new Select({
      name: 'env',
      message: '版本号增加类型？',
      choices: ['patch', 'minor', 'major']
    }).run()
    package.version =
      versionType === 'major'
        ? semver.inc(package.version, 'major')
        : versionType === 'minor'
          ? semver.inc(package.version, 'minor')
          : semver.inc(package.version, 'patch')
    fs.writeFileSync('dist/package.json', JSON.stringify(package, null, 4))
    console.log(chalk.green(package.name), chalk.green(package.version))
    shell.exec('cd dist && jnpm publish')
  })()
