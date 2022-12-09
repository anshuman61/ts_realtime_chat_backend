import {usersRoute} from './routes/users'
import {SocketData,TypeSocketData} from './types'


const allRoutes = {
  users:usersRoute
}

const main = (method:string,data:SocketData)=>{
  allRoutes[data.path as keyof typeof allRoutes](method,data)
}

export {main as routes};