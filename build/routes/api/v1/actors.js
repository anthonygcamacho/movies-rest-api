"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getActors_controller_1 = require("../../../controllers/api/v1/getActors.controller");
var getActorsByID_controller_1 = require("../../../controllers/api/v1/getActorsByID.controller");
var router = express_1.default.Router();
// -------------------------------------------------------------------------------
router.get("/", getActors_controller_1.getActorsController);
router.get("/:actor_id", getActorsByID_controller_1.getActorByIDController);
exports.default = router;
