import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../utils/dbconnect"
import errorHandling from "../../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../../types/ErrorHandlingGeneral.type"

// -------------------------------------------------------------------------------

export const getActorByID: RequestHandler = async (req, res): Promise<void> => {
    // const actorID = "1 OR (2=2)" // test for sql injection and error handling
    const actorID = req.params.actor_id
    const getActorByID = new PS({
        name: "get-actor-by-id",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorID],
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

export const getActors: RequestHandler = async (req, res): Promise<void> => {
    const getActors = new PS({
        name: "get-actors",
        text: "SELECT * FROM actors",
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
