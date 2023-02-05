import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../utils/dbconnect"
import { Error } from "../../../types/Error.type"

export const getActorByIDController: RequestHandler = async (
    req,
    res
): Promise<void> => {
    // const actorID = "1 OR (2=2)" // test for sql injection and error handling
    const actorID = req.params.actor_id
    const getActorByID = new PS({
        name: "get-actors-by-id",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorID],
    })
    try {
        const response = await db.one(getActorByID)
        res.status(200).json(response)
    } catch (err) {
        const errorReport = {
            message: (err as Error).message,
            severity: (err as Error).severity,
            queryName: (err as Error).query.name,
        }
        let statusCode
        if (errorReport.severity === "ERROR") {
            statusCode = 400
        } else if (!errorReport.severity) {
            statusCode = 404
        }
        if (statusCode && typeof statusCode === "number") {
            res.status(statusCode).json({
                error: {
                    message: errorReport.message,
                },
            })
        }
    }
}
