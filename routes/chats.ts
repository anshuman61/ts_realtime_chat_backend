import { createChat, findChat, updateChat, deleteChat } from '../controllers/chats'

const users = {
    GET: findChat,
    POST: createChat,
    UPDATE: updateChat,
    DELETE: deleteChat
}

const usersRoute = (method: string, data: SocketData, socket: any) => {
    users[method as keyof typeof users](data, socket)
}

export { usersRoute }