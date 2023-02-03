import { Request, Response } from "express"

export const healthCheckController = (req: Request, res: Response):void => {
    res.status(200).json({status: 'UP'})
}