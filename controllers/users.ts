import * as userService from '../services/users'


const createUser = async (data: SocketData, socket: any) => {
  const filter = (doc: any) => (doc("email").eq(data.body.email) || doc("phone_no").eq(data.body.phone_no))
  const findUser: any = await userService.findUser(filter)
  let user
  if (findUser.length === 0) {
    user = await userService.createUser(data.body)
  } else {
    user = { message: "User already exists with provide credentials" }
  }
  socket.emit('users', { operation: 'create', data: user })
}

const findUser = async (data: SocketData, socket: any) => {
  const user = await userService.findUser(data.body)
  socket.emit('users', { operation: 'find', data: user })
}

const updateUser = async (data: SocketData, socket: any) => {
  const user = await userService.updateUser(data.body.filters, data.body.updates)
  socket.emit('users', { operation: 'update', data: user })
}

const deleteUser = async (data: SocketData, socket: any) => {
  const user = await userService.deleteUser(data.body.filters)
  socket.emit('users', { operation: 'delete', data: user })
}

export { createUser, findUser, updateUser, deleteUser }