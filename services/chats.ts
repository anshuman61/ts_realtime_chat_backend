import { Db1 } from "../db/db"
const chats = Db1.tableRefs.chats
const connection = Db1.connection

const createChat = async (data: any) => {
    const chat = await chats.insert(data).run(connection)
    return chat
}

const findChat = async (filters: any) => {
    const chat = await chats.filter(filters).run(connection)
    return chat
}

const updateChat = async (filters: any, update: any) => {
    const chat = await chats.filter(filters).update(update).run(connection)
    return chat
}

const deleteChat = async (filters: any) => {
    const chat = await chats.filter(filters).delete().run(connection)
    return chat
}

export { createChat, findChat, updateChat, deleteChat }