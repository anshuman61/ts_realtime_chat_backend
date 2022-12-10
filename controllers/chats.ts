import * as chatService from '../services/chats'

const createChat = async (data: SocketData, socket: any) => {
    const chat = await chatService.createChat(data.body)
    socket.emit('chat', { operation: 'create', data: chat })
}

const findChat = (data: any, socket: any) => {

}

const updateChat = (data: any, socket: any) => {

}

const deleteChat = (data: any, socket: any) => {

}

export { createChat, findChat, updateChat, deleteChat }