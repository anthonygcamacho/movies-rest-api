import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../utils/dbconnect"

interface Director {
    director_id: number
    first_name: string
    last_name: string
    date_of_birth: Date
    nationality: string
}

const getDirectorById = async (directorID: string): Promise<Director> => {
    const getDirectorById = new PS({
        name: "get-director-by-id",
        text: "SELECT * FROM directors WHERE director_id = $1",
        values: [directorID],
    })
    return await db.one(getDirectorById)
}

const getDirectors = async (): Promise<Director[]> => {
    const getDirectors = new PS({
        name: "get-directors",
        text: "SELECT * FROM directors",
    })
    return await db.many(getDirectors)
}

export default {
    getDirectorById,
    getDirectors,
}
