import express from "express"
import apiRoutes from "./api/v1"
import pageRoutes from "./pages"

const router = express.Router()

router.use("/api/v1", apiRoutes)
router.use("/", pageRoutes)

export default router
