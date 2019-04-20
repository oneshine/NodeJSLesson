
const express = require('express');

const app = express();

app.get('/',(req,res)=>{

  res.send('hello expressJS');
});

// get request
app.get('/example',(req,res)=>{

  res.send('Example get request');
});

// get request with route
app.get('/example/:name/:age',(req,res)=>{

  console.log(req.params);
//  res.send('example with route params');
    console.log(req.query);
    res.send(req.params.name+ ' : '+ req.params.age);
});

// input query params in the url as below ==>   ?name = value
// http://localhost:3000/example/wanchai/20?tutorial=paramstutorial

// add sort by --> & sort = value
//http://localhost:3000/example/wanchai/20?tutorial=paramstutorial&sort=byage


app.listen(3000);
