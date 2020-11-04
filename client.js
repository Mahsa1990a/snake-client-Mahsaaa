
const net = require('net');

const connect = function() {

  const conn = net.createConnection({  //from this part we have to call conn not connect
    host: "localhost",
    port: 50541
  });
  //game is an pbject
  //data is key of boj(game)
  conn.on('data', data => console.log(data))
  
    // interpret incoming data as text
    conn.setEncoding('utf8'); 

    return conn;
  }
  module.exports = {connect};