"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv").config();
const initOptions = {};
const pgp = require("pg-promise")(initOptions);
// -------------------------------------------------------------------------------
const cn = process.env.DATABASE_URL;
exports.db = pgp(cn);
