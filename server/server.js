const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT||3000;
console.log(__dirname+'/../public');//if 'path' not used
console.log(publicPath);
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New User connected');
    socket.on('disconnect', ()=>{
        console.log("User disconnected");
    })
})



server.listen(port, ()=>{console.log(`Listening on Port ${port}`);});