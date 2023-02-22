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
const getMovieById = (movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const getMovieByIDQuery = new pg_promise_1.PreparedStatement({
        name: "get-movie-by-id",
        text: "SELECT * FROM movies WHERE movie_id = $1",
        values: [movieId],
    });
    return yield dbconnect_1.db.one(getMovieByIDQuery);
});
const getMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const getMoviesQuery = new pg_promise_1.PreparedStatement({
        name: "get-movies",
        text: "SELECT * FROM movies",
    });
    return yield dbconnect_1.db.many(getMoviesQuery);
});
const getMoviesByActorId = (actorId) => __awaiter(void 0, void 0, void 0, function* () {
    const getActorsMoviesByIdQuery = new pg_promise_1.PreparedStatement({
        name: "get-movies-by-actor-id",
        text: "SELECT mo.movie_id, mo.movie_name FROM movies mo JOIN movies_actors ma ON ma.movie_id = mo.movie_id WHERE ma.actor_id = $1",
        values: [actorId],
    });
    return yield dbconnect_1.db.many(getActorsMoviesByIdQuery);
});
const getMoviesByDirectorId = (directorId) => __awaiter(void 0, void 0, void 0, function* () {
    const getMoviesByDirectorIdQuery = new pg_promise_1.PreparedStatement({
        name: "get-movies-by-director-id",
        text: "SELECT mo.movie_id, mo.movie_name FROM movies mo JOIN directors dir ON mo.director_id = dir.director_id WHERE mo.director_id = $1",
        values: [directorId],
    });
    console.log(getMoviesByDirectorIdQuery);
    return yield dbconnect_1.db.many(getMoviesByDirectorIdQuery);
});
exports.default = {
    getMoviesByDirectorId,
    getMoviesByActorId,
    getMovieById,
    getMovies,
};
