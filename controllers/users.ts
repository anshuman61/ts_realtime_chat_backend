import * as userService from '../services/users'

const createUser = async (data: SocketData, socket: any) => {
  const user = await userService.createUser(data.body)
  socket.emit('users', { operation: 'create', data: user })
}

const findUser = async (data: SocketData, socket: any) => {
  const user = await userService.findUser(data.body)
  socket.emit('users', { operation: 'find', data: user })
}

const updateUser = async (data: SocketData, socket: any) => {

}

const deleteUser = async (data: SocketData, socket: any) => {


}

export { createUser, findUser, updateUser, deleteUser }