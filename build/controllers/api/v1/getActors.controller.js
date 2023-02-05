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
exports.getActorsController = void 0;
const pg_promise_1 = require("pg-promise");
const dbconnect_1 = require("../../../utils/dbconnect");
const getActorsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getActors = new pg_promise_1.PreparedStatement({
        name: "get-actors",
        text: "SELECT * FROM actors",
    });
    try {
        const response = yield dbconnect_1.db.many(getActors);
        res.status(200).json(response);
    }
    catch (err) {
        console.log("catch error", err);
    }
});
exports.getActorsController = getActorsController;
