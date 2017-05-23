const jsonfile = require('jsonfile');

jsonfile.writeFile('tweets.json', [], (err) => {
  if (err) throw err;
  console.log('cleaned all tweets');
});