import { r } from 'rethinkdb-ts'
const DBConfigs: any = {
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
}

const connectDB = async () => {
    for (const db in DBConfigs) {
        const config = DBConfigs[db]
        const connection = await r.connect({
            host: config.host,
            port: config.port
        })
        DBConfigs[db].connection = connection
        await createDB(config)
        await createTables(db, config)
    }
    return;
}

const createDB = async (config: typeof DBConfigs.db1) => {
    try {
        await r.dbCreate(config.name).run(config.connection)
    } catch (err) {
        console.log('Collection already exists')
    }
    return;
}

const createTables = async (db: string, config: typeof DBConfigs.db1) => {
    const db_tables: any = await r.db(config.name).tableList().run(config.connection)
    const difference: any = config.tables.filter((x: string) => !db_tables.includes(x))
    difference.forEach(async (table: string) => {
        try {
            await r.db(config.name).tableCreate(table).run(config.connection)
        } catch (error) {
        }
    })
    // create table references
    config.tables.forEach((table: string) => {
        DBConfigs[db].tableRefs[table] = r.db(config.name).table(table)
    })
    return;
}


export { connectDB, DBConfigs }