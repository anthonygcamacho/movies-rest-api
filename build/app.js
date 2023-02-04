"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
// import path from "path"
// import cookieParser from "cookie-parser"
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
// // ------------------------------------------------------------------
var app = (0, express_1.default)();
exports.app = app;
// // Security
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// // App settings
app.use((0, morgan_1.default)("dev"));
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))
// Routes
app.use("/", routes_1.default);
