import { createUser, findUser, updateUser, deleteUser } from '../controllers/users'

const controllers = {
  GET: findUser,
  POST: createUser,
  UPDATE: updateUser,
  DELETE: deleteUser
}

const usersRoute = (method: string, data: any, socket: any) => {
  controllers[method as keyof typeof controllers](data, socket)
}

export { usersRoute }