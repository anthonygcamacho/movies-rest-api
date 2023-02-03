import { Request, Response } from "express"

export const homeController = (req: Request, res: Response): void => {
    res.send("<p>Home page</p>")
}
