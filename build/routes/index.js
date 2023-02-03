"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var v1_1 = __importDefault(require("./api/v1"));
var pages_1 = __importDefault(require("./pages"));
var router = express_1.default.Router();
router.use("/api/v1", v1_1.default);
router.use("/", pages_1.default);
router.use(function (req, res, next) {
    var error = new Error("Not found");
    error.status = 404;
    next(error);
});
router.use(function (error, req, res, next) {
    res.status(error.status || 500).send({
        error: {
            message: error.message,
        },
    });
});
exports.default = router;
