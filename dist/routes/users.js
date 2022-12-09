"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const users_1 = require("../controllers/users");
const users = {
    GET: users_1.findUser,
    POST: users_1.createUser,
    UPDATE: users_1.updateUser,
    DELETE: users_1.deleteUser
};
const usersRoute = (method, data) => {
    users[method](data);
};
exports.usersRoute = usersRoute;
