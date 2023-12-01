import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3002');
console.log(socket);
// socket.on('connect', () => {
//   console.log('connected');
// })


function App() {
  return (
    <div className="App">
      <h1>Socket IO</h1>
      
      
      {/* <button onClick={() => socket.emit('message', 'Hello World')}></button> */}
      <input type="text" placeholder="Enter your message.." />
      <input type="text" placeholder="Room ID.." />
    </div>
  );
}

export default App;
