import { io } from './server'

const emitMessage = (data: chatData, socket: any) => {
    switch (data.receiver.type) {
        case 'person':
            io.to(data.receiver.id).emit('P2P_MESSAGE', data);
            break;
        case 'group':
            io.in(data.receiver.id).emit('GROUP_MESSAGE', data);
            break;
        case 'broadcast':
            socket.broadcast.emit('BROADCAST_MESSAGE', data);
        default:
            break;
    }
}

export { emitMessage }