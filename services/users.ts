import { Db1 } from "../db/db"
const users = Db1.tableRefs.users
const connection = Db1.connection

const createUser = async (data: any) => {
    const user = await users.insert(data).run(connection)
    return user
}

const findUser = async (data: any) => {
    const user = await users.filter(data).run(connection)
    return user
}

const updateUser = async (data: any) => {
    const user = await users.filter(data).update(data).run(connection)
    return user
}

const deleteUser = async (data: any) => {
    const user = await users.filter(data).delete().run(connection)
    return user
}

export { createUser, findUser, updateUser, deleteUser }