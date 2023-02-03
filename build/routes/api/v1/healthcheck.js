"use strict";
/**
 * http://localhost:3000/api/v1/healthcheck/status
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var healthcheck_controller_1 = require("../../../controllers/api/v1/healthcheck.controller");
var router = express_1.default.Router();
// -------------------------------------------------------------------------------
router.get("/status", healthcheck_controller_1.healthCheckController);
exports.default = router;
