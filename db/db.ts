import { Db } from '../utils/db'
const Db1 = new Db('test_chat', ['users', 'chats'], 'localhost', 49154)

export { Db1 }