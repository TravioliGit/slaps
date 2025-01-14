import express from 'express';
import websocket from 'ws';
import http from 'http';
import pkg from 'log4js';


// Sets up configs for app api's
const app = express();
app.use(express.static('pages'));
const server = http.createServer(app);



// Function wrapper to handle async errors
function asyncErrorHandler(op) {
  return (request, resolve, next) => {
    Promise.resolve(op(request, resolve, next))
      .catch((error) => next(error || new Error()));
  };
}

// app.get('/area/', asyncErrorHandler(getAreas));

// Creates a new websocket server, handles an event listener for new connections
// const wsServer = new websocket.Server({ server: server });
// wsServer.on('connection', newConnection);

// // Handles new connections to the websocket server
// function newConnection(socket) {
//   socket.on('message', messageHandler)
// }

// Handles messages coming from the websocket server
function messageHandler(e) {
  wsServer.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      try {
        client.send(e);
      } catch (err) {
        console.error(err);
      }
    }
  });
}

// Starts the server on port 8080
server.listen(8080, () => {
  console.log('Server running');
});


/** References in this file:
 * 1: all websocket setup code adapted from https://github.com/portsoc/socket-examples and https://github.com/portsoc/EventedWebSocketMouse
 * 2: @function asyncErrorHandler adapted from https://github.com/portsoc/staged-simple-message-board
 * 3: psql error codes found at https://kb.objectrocket.com/postgresql/postgresql-node-errors-949
 */