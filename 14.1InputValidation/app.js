const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');



const app = express();

app.use('/',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));

});

app.post('/',(req,res)=>{
  //  console.log(JSON.stringify(req.body));
  console.log(req.body);
    //res.send('successfully posted data');

  //    res.json({success : true});


      const schema = Joi.object().keys({
        // set rule for data below

        email : Joi.string().trim().email().required(),

        password : Joi.string().min(5).max(10).required()

      }); // end schema
        // require 3 argument => object body, blue print -> schema , call back function
      Joi.validate(req.body,schema,(err,result)=>{

          if(err){
            console.log(err);
            res.send('errhas occured');

          }

            console.log(result);
            res.send('successfully posted data message from Server');
  //          res.json({success : true});

      });



});


app.listen(3000);
