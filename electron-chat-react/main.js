// Modules to control application life and create native browser window
const {app, BrowserWindow, Tray, nativeImage} = require('electron')
const path = require('path')
const electron = require('electron');


const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const port = 3001;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });


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
    

    
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame:true,
    fullscreenable: true,
    transparent:false,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

//  ----- SocketComponent(); // This is the line that is causing the white screen ----------



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



    // Anti gargbage collector
    // var mainWindow = null;