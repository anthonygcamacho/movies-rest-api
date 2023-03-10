"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_controller_1 = __importDefault(require("../../../controllers/api/movies.controller"));
const actors_controller_1 = __importDefault(require("../../../controllers/api/actors.controller"));
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
/**
 * @swagger
 * /api/v1/movies:
 *   get:
 *     tags:
 *     - Movies
 *     summary: Get movies
 *     responses:
 *       200:
 *         description: A list of movies
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
 *                       movie_id:
 *                         type: number
 *                         description: The movie ID
 *                         example: 1
 *                       movie_name:
 *                         type: string
 *                         description: The movie's first name
 *                         example: Mel
 *                       movie_length:
 *                         type: number
 *                         description: Length in minutes
 *                         example: M
 *                       movie_lang:
 *                         type: string
 *                         description: Language
 *                         example: Gibson
 *                       release_date:
 *                         type: string
 *                         description: Birth date
 *                         example: 1978-05-12T07:00:00.000Z *
 *                       age_certificate:
 *                         type: string
 *                         description: Age certificate
 *                         example: Mel
 *                       director_id:
 *                         type: number
 *                         description: The director ID
 *                         example: 1
 */
router.get("/", movies_controller_1.default.getMovies);
/**
 * @swagger
 * '/api/v1/movies/{id}':
 *   get:
 *     tags:
 *     - Movies
 *     summary: Get a single movie
 *     responses:
 *       200:
 *         description: A single movie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     movie_id:
 *                       type: number
 *                       description: The movie ID
 *                       example: 1
 *                     movie_name:
 *                       type: string
 *                       description: The movie's first name
 *                       example: Mel
 *                     movie_length:
 *                       type: number
 *                       description: Length in minutes
 *                       example: M
 *                     movie_lang:
 *                       type: string
 *                       description: Language
 *                       example: Gibson
 *                     release_date:
 *                       type: string
 *                       description: Release date
 *                       example: 1978-05-12T07:00:00.000Z
 *                     age_certificate:
 *                       type: string
 *                       description: Age certificate
 *                       example: Mel
 *                     director_id:
 *                       type: number
 *                       description: The director ID
 *                       example: 1
 */
router.get("/:movieId", movies_controller_1.default.getMovieById);
router.get("/:movieId/actors", actors_controller_1.default.getActorsByMovieId);
router.get("/:movieId/revenue", movies_controller_1.default.getRevenueByMovieId);
exports.default = router;
