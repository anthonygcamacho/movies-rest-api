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
const getActorById = (actorId) => __awaiter(void 0, void 0, void 0, function* () {
    // Test SQL Injection
    // actorId = "1 OR (2=2)"
    // return await db.query(`SELECT * FROM actors WHERE actor_id = ${actorId}`)
    const getActorByIdQuery = new pg_promise_1.PreparedStatement({
        name: "get-actor-by-id",
        text: "SELECT * FROM actors WHERE actor_id = $1",
        values: [actorId],
    });
    return yield dbconnect_1.db.one(getActorByIdQuery);
});
const getActors = () => __awaiter(void 0, void 0, void 0, function* () {
    const getActorsQuery = new pg_promise_1.PreparedStatement({
        name: "get-actors",
        text: "SELECT * FROM actors",
    });
    return yield dbconnect_1.db.many(getActorsQuery);
});
const getActorsByMovieId = (movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const getActorsByMovieIdQuery = new pg_promise_1.PreparedStatement({
        name: "get-actors-by-movie-id",
        text: "SELECT ac.actor_id, ac.first_name FROM actors ac JOIN movies_actors ma ON ma.actor_id = ac.actor_id WHERE ma.movie_id = $1",
        values: [movieId],
    });
    console.log(getActorsByMovieIdQuery);
    return yield dbconnect_1.db.many(getActorsByMovieIdQuery);
});
exports.default = {
    getActorsByMovieId,
    getActorById,
    getActors,
};
