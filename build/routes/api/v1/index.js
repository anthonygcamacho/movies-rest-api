"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var healthcheck_1 = __importDefault(require("./healthcheck"));
var router = express_1.default.Router();
router.use('/healthcheck', healthcheck_1.default);
exports.default = router;
/*

/actors
/actors/:actorID
/actors/:actorID/movies
/actors/:actorID/movies/:movieID

/directors
/directors/:directorID

/movies
/movies/:movieID
/movies/:movieID/actors
/movies/:movieID/director
/movies/:movieID/revenue

*/ 
