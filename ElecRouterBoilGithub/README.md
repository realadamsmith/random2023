
We initially had a ELECTRON REACT ROUTER APP.
We just now are adding the chat funcitonality, 
We need the episodes to load in like Tim Ermilov's app

But in our case, we dont want to feed in episodes to the end point, 
We can just feed in the room number, or an icon that holds the room ID, pass that into the API, 
Then join rooms as we please.

Differences:
He has Electron in his index.html doc. const { ipcRenderer } = require('electron');
We have Electron in our index.ejs?? window.electron.ipcRenderer.once('ipc-example', (arg) => {

Start the app in the `dev` environment:
npm start



To package apps for the local platform:
npm run package

