"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var actors_controller_1 = require("../../../controllers/api/v1/actors.controller");
var router = express_1.default.Router();
// -------------------------------------------------------------------------------
router.get("/", actors_controller_1.actorsController);
exports.default = router;
