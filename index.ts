import { io, app, server } from './utlis/server'
import path from 'path'

import { Db1 } from './db/db'

Db1.connect().then(() => {
  const { routes } = require('./routes')
  io.on('connection', (socket) => {
    socket.on('GET', (data) => {
      routes('GET', data, socket)
    });
    socket.on('POST', (data) => {
      routes('POST', data, socket)
    });
    socket.on('PATCH', (data) => {
      routes('PATCH', data, socket)
    });
    socket.on('DELETE', (data) => {
      routes('DELETE', data, socket)
    })
  });
}).catch((err) => {
  console.log(err)
})

app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve('./views/index.html'));
});

server.listen(3000, () => {
  console.log('listening on :3000');
});