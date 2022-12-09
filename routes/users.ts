import  {createUser,findUser,updateUser,deleteUser} from '../controllers/users'

const users= {
  GET:findUser,
  POST:createUser,
  UPDATE:updateUser,
  DELETE:deleteUser
}

const usersRoute= (method:string,data:any)=>{
  users[method as keyof typeof users](data)
}

export {usersRoute}