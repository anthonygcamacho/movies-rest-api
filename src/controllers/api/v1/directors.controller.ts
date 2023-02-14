import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../utils/dbconnect"
import errorHandling from "../../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../../types/ErrorHandlingGeneral.type"

// -------------------------------------------------------------------------------

export const getDirectorById: RequestHandler = async (
    req,
    res
): Promise<void> => {
    // const actorID = "1 OR (2=2)" // test for sql injection and error handling
    const directorID = req.params.director_id
    const getActorByID = new PS({
        name: "get-director-by-id",
        text: "SELECT * FROM directors WHERE director_id = $1",
        values: [directorID],
    })
    try {
        const response = await db.one(getActorByID)
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

export const getDirectors: RequestHandler = async (req, res): Promise<void> => {
    const getActors = new PS({
        name: "get-directors",
        text: "SELECT * FROM directors",
    })
    try {
        const response = await db.many(getActors)
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}
