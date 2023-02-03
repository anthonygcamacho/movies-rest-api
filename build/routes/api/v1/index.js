"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var healthcheck_1 = __importDefault(require("./healthcheck"));
var actors_1 = __importDefault(require("./actors"));
var router = express_1.default.Router();
router.use("/healthcheck", healthcheck_1.default);
router.use("/actors", actors_1.default);
exports.default = router;
/*

https://www.youtube.com/watch?v=huwyAP75bUs
https://www.youtube.com/watch?v=ch_8h1RQ3Jg
https://www.youtube.com/watch?v=2i6_Ibk7b7I

/actors
/actors/:actorID
/actors/:actorID/movies

/directors
/directors/:directorID
/directors/:directorID/movies

/movies
/movies/:movieID
/movies/:movieID/actors
/movies/:movieID/director
/movies/:movieID/revenue

*/
