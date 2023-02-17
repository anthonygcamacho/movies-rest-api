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
const directors_model_1 = __importDefault(require("../../models/api/directors.model"));
// -------------------------------------------------------------------------------
const getDirectorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const directorID = req.params.director_id;
        const results = yield directors_model_1.default.getDirectorById(directorID);
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
const getDirectors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield directors_model_1.default.getDirectors();
        res.status(200).json(results);
    }
    catch (err) {
        if ((0, ErrorHandlingGeneral_type_1.isErrorHandlingGeneral)(err)) {
            errorHandling_1.default.general(err, res);
        }
    }
});
exports.default = {
    getDirectorById,
    getDirectors,
};
