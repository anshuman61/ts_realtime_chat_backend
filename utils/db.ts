import { r } from 'rethinkdb-ts'

class Db {
    private readonly name: string
    private readonly tables: string[]
    private readonly host: string
    private readonly port: number
    public connection!: any
    public tableRefs!: Record<string, any>
    public constructor(name: string, tables: string[], host: string, port: number) {
        this.name = name
        this.tables = tables
        this.host = host
        this.port = port
        this.tableRefs = {}
    }

    public async connect() {
        this.connection = await r.connect({
            host: this.host,
            port: this.port
        })
        await this.createDB()
        await this.createTables()
        return {
            name: this.name,
            connection: this.connection,
            tableRefs: this.tableRefs
        }
    }
    private async createDB() {
        try {
            await r.dbCreate(this.name).run(this.connection)
        } catch (err) {

        }
        return true;
    }

    private async createTables() {
        const db_tables: any = await r.db(this.name).tableList().run(this.connection)
        const difference: any = this.tables.filter((x: string) => !db_tables.includes(x))
        difference.forEach(async (table: string) => {
            try {
                await r.db(this.name).tableCreate(table).run(this.connection)
            } catch (err) {

            }
        })
        this.tables.forEach((table: string) => {
            this.tableRefs[table] = r.db(this.name).table(table)
        })
        return true;
    }

}

// const Db1 = new Db('test_chat', ['users', 'chats'], 'localhost', 49154)

export { Db }