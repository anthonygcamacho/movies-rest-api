"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getActors_controller_1 = require("../../../controllers/api/v1/getActors.controller");
const getActorsByID_controller_1 = require("../../../controllers/api/v1/getActorsByID.controller");
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
router.get("/", getActors_controller_1.getActorsController);
router.get("/:actor_id", getActorsByID_controller_1.getActorByIDController);
exports.default = router;
