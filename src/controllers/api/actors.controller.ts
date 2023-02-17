import { RequestHandler } from "express"
import errorHandling from "../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../types/ErrorHandlingGeneral.type"
import actorsModel from "../../models/api/actors.model"

// -------------------------------------------------------------------------------

const getActorById: RequestHandler = async (req, res): Promise<void> => {
    try {
        // const actorId = "1 OR (2=2)" // test for sql injection and error handling
        const actorId = req.params.actorId
        const results = await actorsModel.getActorById(actorId)
        res.status(200).json(results)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

const getActors: RequestHandler = async (req, res): Promise<void> => {
    try {
        const results = await actorsModel.getActors()
        res.status(200).json(results)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}

export default {
    getActorById,
    getActors,
}
