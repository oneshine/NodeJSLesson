const fs = require('fs');
const readStream = fs.createReadStream('example','utf8');
const writeStream = fs.createWriteStream('example.txt');

readStream.on('data',(chunk)=>{
  writeStream.write(chunk);
});
