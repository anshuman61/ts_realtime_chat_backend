import { Db1 } from "../db/db"
const users = Db1.tableRefs.users
const connection = Db1.connection

const createUser = async (data: any) => {
    const user = await users.insert(data).run(connection)
    return user
}

const findUser = async (filters: any) => {
    const user = await users.filter(filters).run(connection)
    return user
}

const updateUser = async (filters: any, body: any) => {
    const user = await users.filter(filters).update(body).run(connection)
    return user
}

const deleteUser = async (filters: any) => {
    const user = await users.filter(filters).delete().run(connection)
    return user
}

export { createUser, findUser, updateUser, deleteUser }