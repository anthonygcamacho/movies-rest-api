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
const getMovieById = (movieID) => __awaiter(void 0, void 0, void 0, function* () {
    const getMovieByID = new pg_promise_1.PreparedStatement({
        name: "get-movie-by-id",
        text: "SELECT * FROM movies WHERE movie_id = $1",
        values: [movieID],
    });
    return yield dbconnect_1.db.one(getMovieByID);
});
const getMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const getMovies = new pg_promise_1.PreparedStatement({
        name: "get-movies",
        text: "SELECT * FROM movies",
    });
    return yield dbconnect_1.db.many(getMovies);
});
exports.default = {
    getMovieById,
    getMovies,
};
