const express = require('express');
const path = require('path');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, './', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'build', 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(msg)
    io.sockets.emit('chat message', msg);
  })
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
