const http = require('http');

const fs = require('fs');

const server = http.createServer((req,res)=>{

// read html file.
      //  const readStream = fs.createReadStream('./static/index.html');
      //  res.writeHead(200,{'Content-type':'text/html'});


// read json file
         // const readStream = fs.createReadStream('./static/example.json');
         // res.writeHead(200,{'Content-type':'application/json'});



// read img file
    const readStream = fs.createReadStream('./static/SEPTKophoLogo.png');
    res.writeHead(200,{'Content-type':'image/png'});



  readStream.pipe(res);

});

server.listen(3000);
