const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env['PORT'];

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    //__dirname = 실제경로
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log(`connected at ${port}`);
})