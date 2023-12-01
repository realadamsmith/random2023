const electron = require('electron');
const path = require('path')
const { app, BrowserWindow } = require('electron')

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const port = 3000;
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


// // Import the express module
// const express = require('express');
// // Import the routes
// const routes = require('./routes');
// // Import the database connection
// const db = require('./db');
// // Create the express application
// const app = express();
// // Set the view engine to pug
// app.set('view engine', 'pug');
// // Use the routes
// app.use(routes);
// // Set the port to 3000
// app.set('port', process.env.PORT || 3000);

// // Start the server
// const server = app.listen(app.get("port"), () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// });

// // Export the app
// module.exports = app;
// // Export the server
// module.exports = server;
// // Export the database connection
// module.exports = db;
// // Export the routes
// module.exports = routes;
    
