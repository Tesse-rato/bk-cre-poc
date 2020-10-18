const http = require('http');
const Server = require('./server');
const PORT = process.env.PORT || 3030;

http
  .createServer(Server)
  .listen(PORT, () => console.log('listning on:', PORT));