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
    // Test SQL Injection
    // actorId = "1 OR (2=2)"
    // return await db.query(`SELECT * FROM actors WHERE actor_id = ${actorId}`)
    const getActorByIdQuery = new PS({
        name: "get-actor-by-id",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorId],
    })
    return await db.one(getActorByIdQuery)
}

const getActors = async (): Promise<Actor[]> => {
    const getActorsQuery = new PS({
        name: "get-actors",
        text: "SELECT * FROM actors",
    })
    return await db.many(getActorsQuery)
}

export default {
    getActorById,
    getActors,
}
