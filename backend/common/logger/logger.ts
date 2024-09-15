import colors from 'colors'
import moment from 'moment'

import { ILogger } from './logger.interface'

export class Logger implements ILogger {
  error(...args: unknown[]): void {
    const date = moment().format('LLL')
    console.log(colors.red('ERROR:'), colors.blue(`[${date}]`), ...args)
  }

  info(...args: unknown[]): void {
    const date = moment().format('LLL')
    console.log(colors.green('INFO:'), colors.blue(`[${date}]`), ...args)
  }

  warn(...args: unknown[]): void {
    const date = moment().format('LLL')
    console.log(colors.yellow('WARN:'), colors.blue(`[${date}]`), ...args)
  }
}
