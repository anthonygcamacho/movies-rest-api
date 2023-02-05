"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckController = void 0;
const healthCheckController = (req, res) => {
    res.status(200).json({ status: "UP" });
};
exports.healthCheckController = healthCheckController;
