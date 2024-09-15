export interface ILogger {
  error: (...args: unknown[]) => void,
  info: (...args: unknown[]) => void,
  warn: (...args: unknown[]) => void,
}