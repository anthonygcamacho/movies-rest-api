/**
 * http://localhost:3000/api/v1/healthcheck/status
 */

import express from "express"
import { healthCheckController } from "../../../controllers/api/v1/healthcheck.controller"

// -------------------------------------------------------------------------------

const router = express.Router()

/**
 * @openapi
 * /api/v1/healthcheck:
 *   get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/", healthCheckController)

export default router
