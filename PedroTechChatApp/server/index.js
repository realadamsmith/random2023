
const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors');
const {Server} = require("socket.io")
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://192.168.0.8:3002",
        methods: ["GET", "POST"],
    }
})

// Socket IO is based on events, listening for the "connection" event
io.on("connection", (socket) => {
    console.log(`Connected Person: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id)
    })
})


server.listen(3002, () => {
    console.log('listening ');
});

