"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthcheck_1 = __importDefault(require("./healthcheck"));
const actors_1 = __importDefault(require("./actors"));
const directors_1 = __importDefault(require("./directors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("../../../utils/swagger");
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
// Swagger page
router.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// Swagger Docs in JSON format
router.get("/docs.json", (req, res) => {
    res.status(200).json(swagger_1.swaggerSpec);
});
// Healthcheck
router.use("/healthcheck", healthcheck_1.default);
// Actors
router.use("/actors", actors_1.default);
// Direcotrs
router.use("/directors", directors_1.default);
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
