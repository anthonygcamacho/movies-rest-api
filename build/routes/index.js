"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./api/v1"));
const pages_1 = __importDefault(require("./pages"));
// -------------------------------------------------------------------------------
const router = express_1.default.Router();
router.use("/api/v1", v1_1.default);
router.use("/", pages_1.default);
router.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
        },
    });
});
exports.default = router;
