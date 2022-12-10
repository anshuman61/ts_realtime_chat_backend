import { DBConfigs } from '../configs/db'


const createUser = async (data: any) => {
    const user = await DBConfigs.db1.tableRefs.users.insert(data).run(DBConfigs.db1.connection)
    return user
}

const findUser = async (data: any) => {
    const user = await DBConfigs.db1.tableRefs.users.filter(data).run(DBConfigs.db1.connection)
    return user
}

const updateUser = async (data: any) => {
    const user = await DBConfigs.db1.tableRefs.users.filter(data).update(data).run(DBConfigs.db1.connection)
    return user
}

const deleteUser = async (data: any) => {
    const user = await DBConfigs.db1.tableRefs.users.filter(data).delete().run(DBConfigs.db1.connection)
    return user
}

export { createUser, findUser, updateUser, deleteUser }