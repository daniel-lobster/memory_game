// server.js
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

let card1Master = true;
let card2Master = true;
let card3Master = true;
let card4Master = true;
let card5Master = true;
let card6Master = true;
let card7Master = true;
let card8Master = true;
let card9Master = true;
let card10Master = true;
let card11Master = true;
let card12Master = true;

io.on("connection", socket => {

    console.log(socket.id);

    io.emit('card1', card1Master)
    io.emit('card2', card2Master)
    io.emit('card3', card3Master)
    io.emit('card4', card4Master)
    io.emit('card5', card5Master)
    io.emit('card6', card6Master)
    io.emit('card7', card7Master)
    io.emit('card8', card8Master)
    io.emit('card9', card9Master)
    io.emit('card10', card10Master)
    io.emit('card11', card11Master)
    io.emit('card12', card12Master)
  
    socket.on('disconnect',(reason)=>{
      console.log(reason)
    })

    socket.on('card1', () => {
      card1Master = !card1Master;
      io.emit('card1', card1Master);
    })

    socket.on('card2', () => {
      card2Master = !card2Master;
      io.emit('card2', card2Master);
    })

    socket.on('card3', () => {
      card3Master = !card3Master;
      io.emit('card3', card3Master);
    })

    socket.on('card4', () => {
      card4Master = !card4Master;
      io.emit('card4', card4Master);
    })

    socket.on('card5', () => {
      card5Master = !card5Master;
      io.emit('card5', card5Master);
    })

    socket.on('card6', () => {
      card6Master = !card6Master;
      io.emit('card6', card6Master);
    })

    socket.on('card7', () => {
      card7Master = !card7Master;
      io.emit('card7', card7Master);
    })

    socket.on('card8', () => {
      card8Master = !card8Master;
      io.emit('card8', card8Master);
    })

    socket.on('card9', () => {
      card9Master = !card9Master;
      io.emit('card9', card9Master);
    })

    socket.on('card10', () => {
      card10Master = !card10Master;
      io.emit('card10', card10Master);
    })

    socket.on('card11', () => {
      card11Master = !card11Master;
      io.emit('card11', card11Master);
    })

    socket.on('card12', () => {
      card12Master = !card12Master;
      io.emit('card12', card12Master);
    })


});


/*
setInterval(()=>{
  io.emit('time', new Date())
},1000)
*/