const io = require('socket.io')(3001);
const cfg = require('./stream-config.json');
const stream = require('node-tweet-stream')(cfg);

stream.track('MFV17');
stream.track('javascript');
console.log('stream working');
stream.on('tweet', (tweet) => {
  console.log('got tweet');
  io.emit('tweet', tweet);
});