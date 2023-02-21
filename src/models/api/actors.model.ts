import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../utils/dbconnect"

interface Actor {
    actor_id: number
    first_name: string
    last_name: string
    gender: string
    date_of_birth: Date
}

interface Movie {
    movie_id: number
    movie_name: string
    movie_length: 112
    movie_lang: string
    release_date: Date
    age_certificate: string
    director_id: number
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

const getActorsMoviesById = async (actorId: string): Promise<Movie[]> => {
    const getActorsMoviesByIdQuery = new PS({
        name: "get-actor-by-id",
        text: "SELECT mo.movie_name FROM movies mo JOIN movies_actors ma ON ma.movie_id = mo.movie_id WHERE ma.actor_id = $1",
        values: [actorId],
    })
    return await db.many(getActorsMoviesByIdQuery)
}

export default {
    getActorsMoviesById,
    getActorById,
    getActors,
}
