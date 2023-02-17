import { RequestHandler } from "express"
import errorHandling from "../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../types/ErrorHandlingGeneral.type"
import directorsModel from "../../models/api/directors.model"

// -------------------------------------------------------------------------------

const getDirectorById: RequestHandler = async (req, res): Promise<void> => {
    try {
        const directorID = req.params.director_id
        const response = await directorsModel.getDirectorById(directorID)
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

const getDirectors: RequestHandler = async (req, res): Promise<void> => {
    try {
        const response = await directorsModel.getDirectors()
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

export default {
    getDirectorById,
    getDirectors,
}
