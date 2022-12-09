import {usersRoute} from './routes/users'



const allRoutes = {
  users:usersRoute
}

const main = (method:string,data:any)=>{
  allRoutes[data.path](method,data)
}

export {main as routes};