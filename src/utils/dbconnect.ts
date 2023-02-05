require("dotenv").config()

const initOptions = {}
const pgp = require("pg-promise")(initOptions)

// -------------------------------------------------------------------------------

const cn = process.env.DATABASE_URL

export const db = pgp(cn)
