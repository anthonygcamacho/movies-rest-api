import { RequestHandler } from "express"
import { PreparedStatement as PS } from "pg-promise"
import { db } from "../../../utils/dbconnect"
import errorHandling from "../../../utils/errorHandling"
import { isErrorHandlingGeneral } from "../../../types/ErrorHandlingGeneral.type"

// -------------------------------------------------------------------------------

export const getDirectorsController: RequestHandler = async (
    req,
    res
): Promise<void> => {
    const getActors = new PS({
        name: "get-directors",
        text: "SELECT * FROM directors",
    })
    try {
        const response = await db.many(getActors)
        res.status(200).json(response)
    } catch (err) {
        if (isErrorHandlingGeneral(err)) {
            errorHandling.general(err, res)
        }
    }
}
