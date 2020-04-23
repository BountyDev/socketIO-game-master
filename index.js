//Import
const express  = require("express"),
      http     = require("http"),
      socketIO = require("socket.io"),
      Server   = require("./Server");


//Initialize
const app    = express(),
      server = http.Server(app),
      io     = socketIO(server),
      SERVER = new Server();


//Listen
server.listen(8080, () => console.log("Listening on port 8080!"));
app.use(express.static('client'));


//Socket Handler
io.on('connection', (socket) => SERVER.handleConnection(socket));
