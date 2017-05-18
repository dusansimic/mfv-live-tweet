const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static('public'));

server.listen(3000, '0.0.0.0', (err) => {
  if (err) throw err;
  console.log('Listening on port 3000');
});