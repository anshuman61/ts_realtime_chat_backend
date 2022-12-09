import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import {routes} from './routes';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req:any, res:any) => {
  res.sendFile(path.resolve('./views/index.html'));
});

io.on('connection', (socket) => {
  //console.log('a user connected');
  socket.on('GET',(data)=>{
    routes('GET',data);
  });
  socket.on('POST',(data)=>{
    routes('POST',data);
  });
  socket.on('PATCH',(data)=>{
    routes('PATCH',data);
  });
  socket.on('DELETE',(data)=>{
    routes('DELETE',data);
  })
});

server.listen(3000, () => {
  console.log('listening on :3000');
});