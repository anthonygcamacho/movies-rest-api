import { PreparedStatement as PS } from "pg-promise"
import { db } from "../utils/dbconnect"

interface actorsReturn {
    actor_id: number
    first_name: string
    last_name: string
    gender: string
    date_of_birth: Date
}

export const getActorById = async (actorId: string): Promise<actorsReturn> => {
    const getActorByID = new PS({
        name: "get-actor-by-id",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorId],
    })
    return await db.one(getActorByID)
}

export const getActors = async (): Promise<actorsReturn[]> => {
    const getActors = new PS({
        name: "get-actors",
        text: "SELECT * FROM actors",
    })
    return await db.many(getActors)
}

export default {
    getActorById,
    getActors,
}
