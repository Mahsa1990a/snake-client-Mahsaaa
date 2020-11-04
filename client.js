const net = require('net');

//the earliest point at which the client can start sending data/messages to the server
//As soon as the connection is successfully established
const connect = function() {

  //we setup and configure our connection:

  //only creating connection
  const conn = net.createConnection({  //from this part we have to call conn not connect
    host: "localhost",
    port: 50541
  }); //not connected yet

  //game is an pbject
  //data is key of boj(game)

  //whenevere your connection is connect do :
  conn.on('data', data => console.log(`Servers says: ${data}`)) //when running play.js will show dara because of exporting  //data coming for server //I
  // data is event but has parameter, has callback function
  
  conn.on('connect', () => console.log("Successfully connected to game server")) //using callback function 

  conn.on('connect', () => {
    //console.log("Successfully connected to game server") or you can do this instead of whole line 22
    conn.write(/*msg from client*/'Name: Mah'); //method conn.write to write your name //msg from client
  });
    conn.setEncoding('utf8'); // interpret incoming data as text
    return conn;
  }
  module.exports = {connect}; //{} in play we required {connect} not only connect