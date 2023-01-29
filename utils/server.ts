import express from 'express'
import https from 'https'
import { Server } from 'socket.io'
import fs from 'fs'
import path from 'path'

const app = express()

const options = {
    key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')), // please provide path for key 
    cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem')) // please provide path for cert
}

const server = https.createServer(options, app)

const io = new Server(server)

export { io, app, server }