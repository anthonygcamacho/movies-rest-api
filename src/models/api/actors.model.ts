import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../utils/dbconnect"

interface Actor {
    actor_id: number
    first_name: string
    last_name: string
    gender: string
    date_of_birth: Date
}

const getActorById = async (actorId: string): Promise<Actor> => {
    const getActorByID = new PS({
        name: "get-actor-by-id",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorId],
    })
    return await db.one(getActorByID)
}

const getActors = async (): Promise<Actor[]> => {
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
