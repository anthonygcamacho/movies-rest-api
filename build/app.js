"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
// import path from "path"
// import cookieParser from "cookie-parser"
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./utils/swagger");
const routes_1 = __importDefault(require("./routes"));
// -------------------------------------------------------------------------------
const app = (0, express_1.default)();
exports.app = app;
app.use("/api/v1/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// // Security
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// // App settings
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))
// Routes
app.use("/", routes_1.default);
