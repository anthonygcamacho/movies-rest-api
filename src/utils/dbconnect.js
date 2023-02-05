"use strict";
exports.__esModule = true;
exports.db = void 0;
require("dotenv").config();
var initOptions = {};
var pgp = require("pg-promise")(initOptions);
// -------------------------------------------------------------------------------
var cn;
if (typeof process.env.DATABASE_URL === "string") {
    cn = process.env.DATABASE_URL;
}
exports.db = pgp(cn);
