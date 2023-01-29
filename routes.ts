import { usersRoute } from './routes/users'
import { chatsRoute } from './routes/chats'


const allRoutes = {
  users: usersRoute,
  chats: chatsRoute,
}

const main = (method: string, data: SocketData, socket: any) => {
  allRoutes[data.path as keyof typeof allRoutes](method, data, socket)
}

export { main as routes };