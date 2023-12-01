const electron = require('electron');
const path = require('path')
const { app, BrowserWindow } = require('electron')

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const port = 3001;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

// Broadcast to all. When a client
const SocketComponent = () => {
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
}

SocketComponent();
// Anti gargbage collector
var mainWindow = null;


const createWindow = () => {
    const win = new BrowserWindow({
      width: 900,
      height: 700,
      // webPreferences: {
      //   preload: path.join(__dirname, 'preload.js')
      // }
    })
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') 
        app.quit()
        mainWindow = null
      })
    })
})
