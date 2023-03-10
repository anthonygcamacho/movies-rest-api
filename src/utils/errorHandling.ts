import { Response } from "express"
import { ErrorHandlingGeneral } from "../types/ErrorHandlingGeneral.type"

// -------------------------------------------------------------------------------

const general = (err: ErrorHandlingGeneral, res: Response) => {
    const errorReport = {
        message: err.message,
        severity: err.severity,
        queryName: err.query.name,
    }
    let statusCode
    if (errorReport.severity === "ERROR") {
        statusCode = 400
    } else if (!errorReport.severity) {
        statusCode = 404
    }
    if (statusCode && typeof statusCode === "number") {
        res.status(statusCode).json({
            error: {
                message: errorReport.message,
            },
        })
    }
}

export default {
    general,
}
