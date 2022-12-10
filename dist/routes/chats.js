"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const chats_1 = require("../controllers/chats");
const users = {
    GET: chats_1.findChat,
    POST: chats_1.createChat,
    UPDATE: chats_1.updateChat,
    DELETE: chats_1.deleteChat
};
const usersRoute = (method, data, socket) => {
    users[method](data, socket);
};
exports.usersRoute = usersRoute;
