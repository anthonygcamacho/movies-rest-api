"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
// import path from "path"
// import cookieParser from "cookie-parser"
// import logger from "morgan"
var helmet_1 = __importDefault(require("helmet"));
// import cors from "cors"
var routes_1 = __importDefault(require("./routes"));
// const { notFoundPage } = require('../../controllers/pages/404.controller')
// // ------------------------------------------------------------------
var app = (0, express_1.default)();
exports.app = app;
// // Security
app.use((0, helmet_1.default)());
// app.use(cors())
// // App settings
// app.use(logger("dev"))
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))
// Routes
app.use('/', routes_1.default);
