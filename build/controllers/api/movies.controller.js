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
const errorHandling_1 = __importDefault(require("../../utils/errorHandling"));
const ErrorHandlingGeneral_type_1 = require("../../types/ErrorHandlingGeneral.type");
const movies_model_1 = __importDefault(require("../../models/api/movies.model"));
// -------------------------------------------------------------------------------
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        const results = yield movies_model_1.default.getMovieById(movieId);
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield movies_model_1.default.getMovies();
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
const getMoviesByActorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actorId = req.params.actorId;
        const results = yield movies_model_1.default.getMoviesByActorId(actorId);
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
const getMoviesByDirectorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const directorId = req.params.directorId;
        const results = yield movies_model_1.default.getMoviesByDirectorId(directorId);
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
const getRevenueByMovieId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        const results = yield movies_model_1.default.getRevenueByMovieId(movieId);
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
exports.default = {
    getRevenueByMovieId,
    getMoviesByDirectorId,
    getMoviesByActorId,
    getMovieById,
    getMovies,
};
