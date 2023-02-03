import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../db"

export const getActorsController: RequestHandler = async (
    req,
    res
): Promise<void> => {
    const getActors = new PS({
        name: "get-actors",
        text: "SELECT * FROM actors",
    })
    try {
        const response = await db.many(getActors)
        res.status(200).json(response)
    } catch (err) {
        console.log("catch error", err)
    }
}
