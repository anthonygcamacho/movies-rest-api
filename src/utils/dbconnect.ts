require("dotenv").config()
import { IMain } from "pg-promise"

const initOptions = {}
const pgp: IMain = require("pg-promise")(initOptions)

// -------------------------------------------------------------------------------

let cn
if (typeof process.env.DATABASE_URL === "string") {
    cn = process.env.DATABASE_URL
}

export const db = pgp(cn as string)
