import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../utils/dbconnect"
import errorHandling from "../../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../../types/ErrorHandlingGeneral.type"

// -------------------------------------------------------------------------------

export const getMoviesController: RequestHandler = async (
    req,
    res
): Promise<void> => {
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
