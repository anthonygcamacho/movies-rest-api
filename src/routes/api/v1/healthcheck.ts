/**
 * http://localhost:3000/api/v1/healthcheck/status
 */

import express from 'express'
import { healthCheckController } from "../../../controllers/api/v1/healthcheck.controller"

const router = express.Router()

// -------------------------------------------------------------------------------

router.get("/status", healthCheckController)

export default router
