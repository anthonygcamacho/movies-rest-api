"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv").config();
// const { Pool } = require("pg")
// const pool = new Pool()
// const databaseUrl = process.env.DATABASE_URL
// const pool = new Pool({
//     connectionString: databaseUrl,
// })
// module.exports = {
//     query: (text, params) => pool.query(text, params),
// }
const initOptions = {
/* initialization options */
};
const pgp = require("pg-promise")(initOptions);
const cn = process.env.DATABASE_URL;
exports.db = pgp(cn);
