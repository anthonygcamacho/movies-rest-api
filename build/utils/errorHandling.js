"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const general = (err, res) => {
    const errorReport = {
        message: err.message,
        severity: err.severity,
        queryName: err.query.name,
    };
    let statusCode;
    if (errorReport.severity === "ERROR") {
        statusCode = 400;
    }
    else if (!errorReport.severity) {
        statusCode = 404;
    }
    if (statusCode && typeof statusCode === "number") {
        res.status(statusCode).json({
            error: {
                message: errorReport.message,
            },
        });
    }
};
exports.default = {
    general,
};
