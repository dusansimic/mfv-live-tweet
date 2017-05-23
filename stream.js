const io = require('socket.io')(3001);
const cfg = require('./stream-config.json');
const stream = require('node-tweet-stream')(cfg);

stream.setMaxListeners(0);

const jsonfile = require('jsonfile');
const tweetsDatabase = './tweets.json';

stream.track('MFV17');
//stream.track('javascript');
console.log('stream working');
stream.on('tweet', (tweet) => {
	jsonfile.readFile(tweetsDatabase, (err, db) => {
		if (err) throw err;
		db.push(tweet);
		jsonfile.writeFile(tweetsDatabase, db, (err) => {
			if (err) throw err;
		});
	});
  io.emit('tweet', tweet);
});

io.on('connection', (socket) => {
	jsonfile.readFile(tweetsDatabase, (err, db) => {
		if (err) throw err;
		socket.emit('all tweets', db);
	});
});

