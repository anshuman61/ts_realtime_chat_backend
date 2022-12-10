import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import { routes } from './routes';
import { connectDB } from './configs/db'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

connectDB().then(() => {
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('GET', (data) => {
      routes('GET', data, socket);
    });
    socket.on('POST', (data) => {
      routes('POST', data, socket);
    });
    socket.on('PATCH', (data) => {
      routes('PATCH', data, socket);
    });
    socket.on('DELETE', (data) => {
      routes('DELETE', data, socket);
    })
  });
}).catch((err) => console.log(err));

app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve('./views/index.html'));
});

server.listen(3000, () => {
  console.log('listening on :3000');
});