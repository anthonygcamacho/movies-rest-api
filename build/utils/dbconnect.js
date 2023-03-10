"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv").config();
const initOptions = {};
const pgp = require("pg-promise")(initOptions);
// -------------------------------------------------------------------------------
let cn;
if (typeof process.env.DATABASE_URL === "string") {
    cn = process.env.DATABASE_URL;
}
exports.db = pgp(cn);
