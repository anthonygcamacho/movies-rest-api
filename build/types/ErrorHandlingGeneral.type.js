"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErrorHandlingGeneral = void 0;
function isErrorHandlingGeneral(x) {
    if (x && typeof x === "object" && "severity" in x) {
        return true;
    }
    return false;
}
exports.isErrorHandlingGeneral = isErrorHandlingGeneral;
