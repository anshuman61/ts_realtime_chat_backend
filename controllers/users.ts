import * as userService from '../services/users'

const createUser = async (data: SocketData, socket: any) => {
  const user = await userService.createUser(data.body)
  socket.emit('users', { operation: 'create', data: user })
}

const findUser = async (data: SocketData, socket: any) => {
  const user = await userService.findUser(data.body.filter)
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