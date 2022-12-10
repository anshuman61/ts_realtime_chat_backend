import { DBConfigs } from '../configs/db'

const chats = DBConfigs.db1.tableRefs.chats
const connection = DBConfigs.db1.connection

const createChat = async (data: any) => {
    const chat = await chats.insert(data).run(connection)
    return chat
}

const findChat = async (data: any) => {
    const chat = await chats.filter(data).run(connection)
    return chat
}

const updateChat = async (data: any) => {
    const chat = await chats.filter(data).update(data).run(connection)
    return chat
}

const deleteChat = async (data: any) => {
    const chat = await chats.filter(data).delete().run(connection)
    return chat
}

export { createChat, findChat, updateChat, deleteChat }