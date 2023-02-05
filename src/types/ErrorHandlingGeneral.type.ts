export interface ErrorHandlingGeneral extends Error {
    // message: string
    severity: string
    query: {
        name: string
    }
}

export function isErrorHandlingGeneral(x: unknown): x is ErrorHandlingGeneral {
    if (x && typeof x === "object" && "severity" in x) {
        return true
    }
    return false
}
