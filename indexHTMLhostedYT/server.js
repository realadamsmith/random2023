// https://www.youtube.com/watch?v=RL_E56NPSN0
// https://github.com/websockets/ws or https://www.npmjs.com/package/ws
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 3000;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

// Broadcast to all. When a client
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === ws.OPEN) {
                client.send(data);
            }
        });
    })
})

server.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
})


