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
exports.deleteChat = exports.updateChat = exports.findChat = exports.createChat = void 0;
const db_1 = require("../configs/db");
const chats = db_1.DBConfigs.db1.tableRefs.chats;
const connection = db_1.DBConfigs.db1.connection;
const createChat = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield chats.insert(data).run(connection);
    return chat;
});
exports.createChat = createChat;
const findChat = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield chats.filter(data).run(connection);
    return chat;
});
exports.findChat = findChat;
const updateChat = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield chats.filter(data).update(data).run(connection);
    return chat;
});
exports.updateChat = updateChat;
const deleteChat = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield chats.filter(data).delete().run(connection);
    return chat;
});
exports.deleteChat = deleteChat;
