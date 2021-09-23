#!/usr/bin/env node

import { checkApi } from './api'
import path from 'path'
import { program } from 'commander'

declare let wx: any
const noop = () => {
  wx.login()
}

program
  .command('check <dir>')
  .description('检查小程序 api 支持情况')
  .action((filePath) => {
    checkApi(path.resolve(process.cwd(), filePath))
  })

program.parse(process.argv)
