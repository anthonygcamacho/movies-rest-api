import express from "express"
import healthcheck from "./healthcheck"
import actors from "./actors"

const router = express.Router()

router.use("/healthcheck", healthcheck)

router.use("/actors", actors)

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
