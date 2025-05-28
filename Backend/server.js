const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');  // import your socket setup

const port = process.env.PORT || 4000;

const server = http.createServer(app);

// Initialize Socket.IO on the server
initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
