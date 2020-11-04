const net = require('net');
/**
 * Establishes connection with the game server
 */
//don't have to touch all connect function
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

  console.log('Connecting ...');
  connect();

  //Update the connect function to also attach an event handler to handle incoming data and console log it for the player.