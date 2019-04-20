const http = require('http');


const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.write('hello word form node js');
    res.end();
  }
  else{
    // if not root domain --> root mean : localhost:3000
    // not root domain --> mean : localhost:3000/subDomain
    res.write('usining some other domain');
    res.end();

  }



});

server.listen('3000');
