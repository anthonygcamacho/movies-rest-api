#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const app_1 = require("../app");
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
(0, debug_1.default)("server:server");
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || "80");
app_1.app.set("port", port);
/**
 * Create HTTP server.
 */
var server = http_1.default.createServer(app_1.app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
server.on("error", onError);
server.on("listening", onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    let port;
    if (typeof val === "string") {
        port = parseInt(val, 10);
    }
    else {
        port = val;
    }
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    let bind;
    if (addr) {
        if (typeof addr === "string") {
            bind = "pipe " + addr;
        }
        else {
            bind = "port " + addr.port;
        }
    }
    (0, debug_1.default)("Listening on " + bind);
}
