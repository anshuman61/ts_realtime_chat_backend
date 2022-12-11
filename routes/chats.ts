import { createChat, findChat, updateChat, deleteChat } from '../controllers/chats'

const controllers = {
    GET: findChat,
    POST: createChat,
    UPDATE: updateChat,
    DELETE: deleteChat
}

const chatsRoute = (method: string, data: SocketData, socket: any) => {
    controllers[method as keyof typeof controllers](data, socket)
}

export { chatsRoute }