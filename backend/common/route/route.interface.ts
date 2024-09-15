import { Response, Request, NextFunction } from "express"

export interface IRoute {
  path: string,
  method: "get" | "post" | "delete" | "put" | "patch",
  callback: (req: Request, res: Response, next: NextFunction) => void
}
