"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const users_1 = require("./routes/users");
const allRoutes = {
    users: users_1.usersRoute
};
const main = (method, data, socket) => {
    allRoutes[data.path](method, data, socket);
};
exports.routes = main;
