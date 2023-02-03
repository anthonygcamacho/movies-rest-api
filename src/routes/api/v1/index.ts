import express from 'express'
import healthcheck from './healthcheck'

const router = express.Router()

router.use('/healthcheck', healthcheck);

export default router

/*

/actors
/actors/:actorID
/actors/:actorID/movies
/actors/:actorID/movies/:movieID

/directors
/directors/:directorID

/movies
/movies/:movieID
/movies/:movieID/actors
/movies/:movieID/director
/movies/:movieID/revenue

*/