import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../utils/dbconnect"

interface Movie {
    movie_id: number
    movie_name: string
    movie_length: number
    movie_lang: string
    release_date: Date
    age_certificate: string
    director_id: number
}

const getMovieById = async (movieId: string): Promise<Movie> => {
    const getMovieByIDQuery = new PS({
        name: "get-movie-by-id",
        text: "SELECT * FROM movies WHERE movie_id = $1",
        values: [movieId],
    })
    return await db.one(getMovieByIDQuery)
}

const getMovies = async (): Promise<Movie[]> => {
    const getMoviesQuery = new PS({
        name: "get-movies",
        text: "SELECT * FROM movies",
    })
    return await db.many(getMoviesQuery)
}

const getMoviesByActorId = async (actorId: string): Promise<Movie[]> => {
    const getActorsMoviesByIdQuery = new PS({
        name: "get-movies-by-actor-id",
        text: "SELECT mo.movie_id, mo.movie_name FROM movies mo JOIN movies_actors ma ON ma.movie_id = mo.movie_id WHERE ma.actor_id = $1",
        values: [actorId],
    })
    return await db.many(getActorsMoviesByIdQuery)
}

const getMoviesByDirectorId = async (directorId: string): Promise<Movie[]> => {
    const getMoviesByDirectorIdQuery = new PS({
        name: "get-movies-by-director-id",
        text: "SELECT mo.movie_id, mo.movie_name FROM movies mo JOIN directors dir ON mo.director_id = dir.director_id WHERE mo.director_id = $1",
        values: [directorId],
    })
    console.log(getMoviesByDirectorIdQuery)
    return await db.many(getMoviesByDirectorIdQuery)
}

export default {
    getMoviesByDirectorId,
    getMoviesByActorId,
    getMovieById,
    getMovies,
}
