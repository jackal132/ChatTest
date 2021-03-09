const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('dotenv').config();
server.listen(process.env['PORT'], ()=>{});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});

// NameSpace 1 
const namespace1 = io.of('/namespace1');
namespace1.on('connect', (socket) => {
    namespace1.emit('news', { hello : 'Someone connected at namespace1'});
});

// NameSpace 2
const namespace2 = io.of('/namespace2');
namespace2.on('connect', (socket) => {
    namespace2.emit('news', { hello : 'Someone connected at namespace2'});
});
