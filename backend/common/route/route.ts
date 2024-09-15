import { Router } from "express"
import { Logger } from "../logger/logger"
import { IRoute } from "./route.interface"

export class RouteBind {

  private readonly _router: Router

  constructor() {
    this._router = Router()
  }

  get router(): Router {
    return this._router
  }

  get logger(): Logger {
    return new Logger()
  }

  protected routes(routes: IRoute[]): void {
    for (const route of routes) {
      const handler = route.callback.bind(this)
      this._router[route.method](route.path, handler)
    }
  }

}