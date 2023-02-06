"use strict";
/**
 * http://localhost:3000/api/v1/healthcheck/status
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthcheck_controller_1 = require("../../../controllers/api/v1/healthcheck.controller");
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
/**
 * @swagger
 * /api/v1/healthcheck:
 *   get:
 *     tags:
 *     - Healthcheck
 *     summary: Responds if the app is up and running
 *     description: Used for testing if the server up and running
 *     responses:
 *       200:
 *         description: App is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.get("/", healthcheck_controller_1.healthCheckController);
exports.default = router;
