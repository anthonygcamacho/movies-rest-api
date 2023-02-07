import express, { Request, Response } from "express"
import healthcheck from "./healthcheck"
import actors from "./actors"
import directors from "./directors"
import movies from "./movies"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "../../../utils/swagger"

// -------------------------------------------------------------------------------

const router = express.Router()

// Swagger page
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Swagger Docs in JSON format
router.get("/docs.json", (req: Request, res: Response) => {
    res.status(200).json(swaggerSpec)
})

// Healthcheck
router.use("/healthcheck", healthcheck)

// Actors
router.use("/actors", actors)

// Direcotrs
router.use("/directors", directors)

// Movies
router.use("/movies", movies)

export default router

/*

https://www.youtube.com/watch?v=huwyAP75bUs
https://www.youtube.com/watch?v=ch_8h1RQ3Jg
https://www.youtube.com/watch?v=2i6_Ibk7b7I

/actors
/actors/:actorID
/actors/:actorID/movies

/directors
/directors/:directorID
/directors/:directorID/movies

/movies
/movies/:movieID
/movies/:movieID/actors
/movies/:movieID/director
/movies/:movieID/revenue

*/
