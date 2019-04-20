const fs = require('fs');
// use for read large file size
const readStream = fs.createReadStream('example.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
//  console.log(chunk);

  writeStream.write(chunk);

});
