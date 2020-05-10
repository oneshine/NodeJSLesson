const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use('/public',express.static(path.join(__dirname,'static')));

app.use(bodyParser.urlencoded({extended: false}));


app.get('/',(req,res)=>{

//    res.send('hello from express Node Js');
  res.sendFile(path.join(__dirname,'static','index.html'));

});



app.post('/',(req,res)=>{

//    console.log(req.body);
      console.log(JSON.stringify(req.body,null,2));

    // database work here
    res.send("successfully posted data");

});


app.listen(3000);
