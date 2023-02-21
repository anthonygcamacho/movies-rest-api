"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = require("pg-promise");
const dbconnect_1 = require("../../utils/dbconnect");
const getDirectorById = (directorId) => __awaiter(void 0, void 0, void 0, function* () {
    const getDirectorByIdQuery = new pg_promise_1.PreparedStatement({
        name: "get-director-by-id",
        text: "SELECT * FROM directors WHERE director_id = $1",
        values: [directorId],
    });
    return yield dbconnect_1.db.one(getDirectorByIdQuery);
});
const getDirectors = () => __awaiter(void 0, void 0, void 0, function* () {
    const getDirectorsQuery = new pg_promise_1.PreparedStatement({
        name: "get-directors",
        text: "SELECT * FROM directors",
    });
    return yield dbconnect_1.db.many(getDirectorsQuery);
});
exports.default = {
    getDirectorById,
    getDirectors,
};
