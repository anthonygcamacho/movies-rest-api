"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const directors_controller_1 = require("../../../controllers/api/v1/directors.controller");
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
/**
 * @swagger
 * /api/v1/directors:
 *   get:
 *     tags:
 *     - Directors
 *     summary: Get directors
 *     responses:
 *       200:
 *         description: A list of directors
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
 *                       director_id:
 *                         type: number
 *                         description: The director ID
 *                         example: 1
 *                       first_name:
 *                         type: string
 *                         description: The director's first name
 *                         example: James
 *                       last_name:
 *                         type: string
 *                         description: The director's last name
 *                         example: Cameron
 *                       date_of_birth:
 *                         type: string
 *                         description: Birth date
 *                         example: 1978-05-12T07:00:00.000Z
 *                       nationality:
 *                         type: string
 *                         direction: Nationality
 *                         example: American
 */
router.get("/", directors_controller_1.getDirectors);
/**
 * @swagger
 * '/api/v1/directors/{id}':
 *   get:
 *     tags:
 *     - Directors
 *     summary: Get a single director
 *     responses:
 *       200:
 *         description: A single director
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     director_id:
 *                       type: number
 *                       description: The director ID
 *                       example: 1
 *                     first_name:
 *                       type: string
 *                       description: The director's first name
 *                       example: James
 *                     last_name:
 *                       type: string
 *                       description: The director's last name
 *                       example: Cameron
 *                     date_of_birth:
 *                       type: string
 *                       description: Birth date
 *                       example: 1978-05-12T07:00:00.000Z
 *                     nationality:
 *                       type: string
 *                       direction: Nationality
 *                       example: American
 */
router.get("/:director_id", directors_controller_1.getDirectorById);
exports.default = router;
