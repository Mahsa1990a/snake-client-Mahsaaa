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
  conn.on('error', () => console.log("This is error"))
  conn.on('connect', () => {
    //console.log("Successfully connected to game server") or you can do this instead of whole line 29
    //conn.write(/*msg from client*/'Name: Mah'); //method conn.write to write your name //msg from client
    conn.write('Name: Mah')

    //let delay = 0;
    //let movement = ["Move: up", "Move: left", "Move: down", "Move: right"]
    //for(let i = 0; i < 10; i++){
      //for(let frame = 0; frame < movement.length; frame++) {
    //     setTimeout(() => {
    //       conn.write(` ${movement[frame]} `);
    //     }, delay + (frame * 2000));
    //   } delay += 10000
    // };

    let movement = ["Move: up", "Move: left", "Move: down", "Move: right"]
    let timeOut = 1000;
    for (let i = 0 ; i < movement.length; i++){
      console.log(timeOut)
      setTimeout(() => {
        conn.write(`${movement[i]}`);
      }, timeOut);
      timeOut = timeOut + 2000
      setTimeout(() => {
        conn.write(`${movement[i]}`);
      }, timeOut);
      timeOut = timeOut + 2000
    }



      // setTimeout(() => conn.write("Move: up"), 1000)
      // setTimeout(() => conn.write("Move: up"), 2000)
      // setTimeout(() => conn.write("Move: left"), 3000)
      // setTimeout(() => conn.write("Move: left"), 4000)
      // setTimeout(() => conn.write("Move: down"), 5000)
      // setTimeout(() => conn.write("Move: down"), 6000)
      // setTimeout(() => conn.write("Move: right"), 7000)
      // setTimeout(() => conn.write("Move: right"), 8000)
  });

  conn.on('connect', () => console.log("Successfully connected to game server")) //using callback function 

  
    conn.setEncoding('utf8'); // interpret incoming data as text
    return conn;
  }

  /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//const setupInput = function() {
  //const stdin = process.stdin;
  //stdin.setRawMode(true);
  //stdin.setEncoding('utf8');
  //stdin.resume();
  //return stdin;
//}

  module.exports = {connect}; //{} in play we required {connect} not only connect