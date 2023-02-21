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

export default {
    getMovieById,
    getMovies,
}
