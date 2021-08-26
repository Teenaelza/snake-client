const net = require ('net');
const connect = function () {
  const up = "Move: up";
  const down = "Move: down";
  const left = "Move: down";
  const right = "Move: down";
  const conn = net.createConnection( {
    host : '135.23.223.133',
    port : 50542
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: TJK');
    let iteration = 0;
    const interval = setInterval(function(){
      iteration++
      conn.write(up);
      if(iteration === 10) {
        clearInterval(interval) 
      }
    }, 250)

  });
  return conn;
};
module.exports = {connect};