const http = require('http')
const app = require('./app')

// This is the port the server will run on.
// If it is set, we use the given port. Otherwise, we use 3000.
const port = process.env.PORT || 3000

const server = http.createServer(app)

// This starts our server and listens on the port.
server.listen(port)