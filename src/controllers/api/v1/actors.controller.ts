import { Request, Response } from "express"

export const actorsController = (req: Request, res: Response):void => {
    res.status(200).json({actors: true})
}