"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const socket_io_1 = require("socket.io");
const routes_1 = require("./routes");
const db_1 = require("./configs/db");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
(0, db_1.connectDB)().then(() => {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('GET', (data) => {
            (0, routes_1.routes)('GET', data, socket);
        });
        socket.on('POST', (data) => {
            (0, routes_1.routes)('POST', data, socket);
        });
        socket.on('PATCH', (data) => {
            (0, routes_1.routes)('PATCH', data, socket);
        });
        socket.on('DELETE', (data) => {
            (0, routes_1.routes)('DELETE', data, socket);
        });
    });
}).catch((err) => console.log(err));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve('./views/index.html'));
});
server.listen(3000, () => {
    console.log('listening on :3000');
});
