"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findUser = exports.createUser = void 0;
const db_1 = require("../configs/db");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.DBConfigs.db1.tableRefs.users.insert(data).run(db_1.DBConfigs.db1.connection);
    return user;
});
exports.createUser = createUser;
const findUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.DBConfigs.db1.tableRefs.users.filter(data).run(db_1.DBConfigs.db1.connection);
    return user;
});
exports.findUser = findUser;
const updateUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.DBConfigs.db1.tableRefs.users.filter(data).update(data).run(db_1.DBConfigs.db1.connection);
    return user;
});
exports.updateUser = updateUser;
const deleteUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.DBConfigs.db1.tableRefs.users.filter(data).delete().run(db_1.DBConfigs.db1.connection);
    return user;
});
exports.deleteUser = deleteUser;
