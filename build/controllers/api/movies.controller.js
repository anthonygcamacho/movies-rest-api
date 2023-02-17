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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = exports.getMovieById = void 0;
const pg_promise_1 = require("pg-promise");
const dbconnect_1 = require("../../utils/dbconnect");
const errorHandling_1 = __importDefault(require("../../utils/errorHandling"));
const ErrorHandlingGeneral_type_1 = require("../../types/ErrorHandlingGeneral.type");
// -------------------------------------------------------------------------------
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const actorID = "1 OR (2=2)" // test for sql injection and error handling
    const movieID = req.params.movie_id;
    const getMovieByID = new pg_promise_1.PreparedStatement({
        name: "get-movie-by-id",
        text: "SELECT * FROM movies WHERE movie_id = $1",
        values: [movieID],
    });
    try {
        const response = yield dbconnect_1.db.one(getMovieByID);
        res.status(200).json(response);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
exports.getMovieById = getMovieById;
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getMovies = new pg_promise_1.PreparedStatement({
        name: "get-movies",
        text: "SELECT * FROM movies",
    });
    try {
        const response = yield dbconnect_1.db.many(getMovies);
        res.status(200).json(response);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
exports.getMovies = getMovies;
