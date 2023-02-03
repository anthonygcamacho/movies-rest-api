import express from "express"
import { actorsController } from "../../../controllers/api/v1/actors.controller"

const router = express.Router()

// -------------------------------------------------------------------------------

router.get("/", actorsController)

export default router
