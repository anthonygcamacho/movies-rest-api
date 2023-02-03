import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../db"
import { Error } from "../../../types/Error.type"

export const getActorByIDController: RequestHandler = async (
    req,
    res
): Promise<void> => {
    const actorID = req.params.actor_id
    // const actorID = "1 OR (2=2)"
    const getActorByID = new PS({
        name: "get-actors",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorID],
    })

    try {
        const response = await db.one(getActorByID)
        res.status(200).json(response)
    } catch (err) {
        console.log({
            message: (err as Error).message,
            severity: (err as Error).severity,
            queryName: (err as Error).query.name,
        })
        console.log("catch error", err)
    }
}
