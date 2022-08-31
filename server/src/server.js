const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

let users = [];
let menssages = [];

io.on("connection", (socket) => {
  console.log(`O usuário ${socket.id} se connectou`);
  users.push({ id: socket.id, x: 0, y: 0 })

  socket.on('disconnect', () => {
    console.log(`O usuário ${socket.id} se desconectou`);
    users = users.filter(user => user.id !== socket.id);
  })

  // Movimento do personagem
  socket.on("USER_MOVE", (move) => {
    const user = users.find(user => user.id === socket.id);
    user.x = user.x + (move.x || 0);
    user.y = user.y + (move.y || 0);
    io.emit("USER_MOVE_UPDATE", JSON.stringify(users));
  })

  // Chat
  socket.on("USER_MSG", (msg) => {
    if (msg) {
      menssages.push(msg);
      io.emit("USER_MSGS_UPDATE", JSON.stringify(menssages));
    }
  })

});


server.listen(3001, () => {
  console.log("[SERVER] Servidor rodando na porta 3001");
})