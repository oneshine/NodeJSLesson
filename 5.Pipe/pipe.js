const fs = require('fs');
const zlib = require('zlib');
//const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();


// Read and write zip file
      //const readStream = fs.createReadStream('example.txt','utf8');
      //const writeStream = fs.createWriteStream('exmple2.txt.gz');
      //readStream.pipe(gzip).pipe(writeStream);


// read and write uncompress file.
  const readStream = fs.createReadStream('exmple2.txt.gz');
  const writeStream = fs.createWriteStream('uncompress.txt');

  readStream.pipe(gunzip).pipe(writeStream);
