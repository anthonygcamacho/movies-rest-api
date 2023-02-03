import express, { Request, Response, NextFunction } from "express"
import apiRoutes from "./api/v1"
import pageRoutes from "./pages"

const router = express.Router()

router.use("/api/v1", apiRoutes)
router.use("/", pageRoutes)

interface ErrorStatus extends Error {
    status: number
}

router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not found") as ErrorStatus
    error.status = 404
    next(error)
})

router.use(
    (error: ErrorStatus, req: Request, res: Response, next: NextFunction) => {
        res.status(error.status || 500).send({
            error: {
                message: error.message,
            },
        })
    }
)

export default router
