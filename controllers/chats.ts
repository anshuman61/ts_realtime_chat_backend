import * as chatService from '../services/chats'
import { emitMessage, emitData } from '../utils/socket'

const createChat = async (data: SocketData, socket: any) => {
    await chatService.createChat(data.body)
    emitMessage(data.body, socket)
}

const findChat = async (data: any, socket: any) => {
    const chat = await chatService.findChat(data.body.filter)
    emitData(chat)
}

const updateChat = (data: any, socket: any) => {

}

const deleteChat = (data: any, socket: any) => {
}

export { createChat, findChat, updateChat, deleteChat }