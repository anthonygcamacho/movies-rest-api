import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../utils/dbconnect"
import errorHandling from "../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../types/ErrorHandlingGeneral.type"
import moviesModel from "../../models/api/movies.model"

// -------------------------------------------------------------------------------

const getMovieById: RequestHandler = async (req, res): Promise<void> => {
    try {
        const movieId = req.params.movieId
        const results = await moviesModel.getMovieById(movieId)
        res.status(200).json(results)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

const getMovies: RequestHandler = async (req, res): Promise<void> => {
    try {
        const results = await moviesModel.getMovies()
        res.status(200).json(results)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

export default {
    getMovieById,
    getMovies,
}
