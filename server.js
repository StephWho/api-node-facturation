const http = require('http');
// const app = require('./app');

// app.set('port', process.env.PORT || 3003);
const server = http.createServer((req, res) => {
    res.end('Hello World');
    }
);

server.listen(process.env.PORT || 3003);
