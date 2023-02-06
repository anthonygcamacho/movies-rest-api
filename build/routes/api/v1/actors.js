"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getActors_controller_1 = require("../../../controllers/api/v1/getActors.controller");
const getActorsByID_controller_1 = require("../../../controllers/api/v1/getActorsByID.controller");
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
/**
 * @swagger
 * /api/v1/actors:
 *   get:
 *     tags:
 *     - Actors
 *     summary: Get actors
 *     responses:
 *       200:
 *         description: A single actor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       actor_id:
 *                         type: number
 *                         description: The actor ID
 *                         example: 1
 *                       first_name:
 *                         type: string
 *                         description: The actors first name
 *                         example: Mel
 *                       last_name:
 *                         type: string
 *                         description: The actors last name
 *                         example: Gibson
 *                       gender:
 *                         type: string
 *                         description: The actors gender
 *                         example: M
 *                       date_of_birth:
 *                         type: string
 *                         description: Birth date
 *                         example: 1978-05-12T07:00:00.000Z
 */
router.get("/", getActors_controller_1.getActorsController);
/**
 * @swagger
 * '/api/v1/actors/{id}':
 *   get:
 *     tags:
 *     - Actors
 *     summary: Get a single actor
 *     responses:
 *       200:
 *         description: A single actor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     actor_id:
 *                       type: number
 *                       description: The actor ID
 *                       example: 1
 *                     first_name:
 *                       type: string
 *                       description: The actors first name
 *                       example: Mel
 *                     last_name:
 *                       type: string
 *                       description: The actors last name
 *                       example: Gibson
 *                     gender:
 *                       type: string
 *                       description: The actors gender
 *                       example: M
 *                     date_of_birth:
 *                       type: string
 *                       description: Birth date
 *                       example: 1978-05-12T07:00:00.000Z
 */
router.get("/:actor_id", getActorsByID_controller_1.getActorByIDController);
exports.default = router;
