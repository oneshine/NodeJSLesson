const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use('/',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));

});

app.post('/',(req,res)=>{
    console.log(JSON.stringify(req.body,null,2));

    //res.send('successfully posted data');

      res.json({success : true});


});


app.listen(3000);
