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
exports.DBConfigs = exports.connectDB = void 0;
const rethinkdb_ts_1 = require("rethinkdb-ts");
const DBConfigs = {
    db1: {
        name: 'test_chat',
        tables: ['users', 'chats'],
        host: 'localhost',
        port: 49154,
        connection: null,
        tableRefs: {
            users: null,
            chats: null
        }
    }
};
exports.DBConfigs = DBConfigs;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const db in DBConfigs) {
        const config = DBConfigs[db];
        const connection = yield rethinkdb_ts_1.r.connect({
            host: config.host,
            port: config.port
        });
        DBConfigs[db].connection = connection;
        yield createDB(config);
        yield createTables(db, config);
    }
    return;
});
exports.connectDB = connectDB;
const createDB = (config) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield rethinkdb_ts_1.r.dbCreate(config.name).run(config.connection);
    }
    catch (err) {
        console.log('Collection already exists');
    }
    return;
});
const createTables = (db, config) => __awaiter(void 0, void 0, void 0, function* () {
    const db_tables = yield rethinkdb_ts_1.r.db(config.name).tableList().run(config.connection);
    const difference = config.tables.filter((x) => !db_tables.includes(x));
    difference.forEach((table) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield rethinkdb_ts_1.r.db(config.name).tableCreate(table).run(config.connection);
        }
        catch (error) {
        }
    }));
    // create table references
    config.tables.forEach((table) => {
        DBConfigs[db].tableRefs[table] = rethinkdb_ts_1.r.db(config.name).table(table);
    });
    return;
});
