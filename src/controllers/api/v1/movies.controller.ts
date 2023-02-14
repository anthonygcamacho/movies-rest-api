import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../utils/dbconnect"
import errorHandling from "../../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../../types/ErrorHandlingGeneral.type"

// -------------------------------------------------------------------------------

export const getMovieById: RequestHandler = async (req, res): Promise<void> => {
    // const actorID = "1 OR (2=2)" // test for sql injection and error handling
    const movieID = req.params.movie_id
    const getMovieByID = new PS({
        name: "get-movie-by-id",
        text: "SELECT * FROM movies WHERE movie_id = $1",
        values: [movieID],
    })
    try {
        const response = await db.one(getMovieByID)
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

export const getMovies: RequestHandler = async (req, res): Promise<void> => {
    const getMovies = new PS({
        name: "get-movies",
        text: "SELECT * FROM movies",
    })
    try {
        const response = await db.many(getMovies)
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}
