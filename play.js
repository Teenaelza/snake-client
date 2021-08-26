const {connect} = require ('./client.js');
console.log("Connecting ...");
// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (Key) {
    // \u0003 maps to ctrl+c input
    if (Key === '\u0003') {
      process.exit();
    }
};
connect();
setupInput();