const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');


const app = express();

app.use('/public',express.static(path.join(__dirname,'sttatic')));

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'static','index.html'));

});


app.post('/',(req,res)=>{

  // to verify input data need to crteate Schema
 // schema is "blue preint" of data
    console.log(req.body);
//    console.log(json.stringify(req.body));

    const schema = Joi.object().keys({
      // set rule for data below

      // rule for Email
        // email field must be string value
        // email.requie mean : input must be email can't blank
      email : Joi.string().trim().email(),//.required(),

      // password field
      // password must be string
      // password.min() = set minimun charactor
      // .max() = set maximium charactor
      // require() = can't blank
      password : Joi.string().min(5).max(10),//.required()

    }); // end schema
      // require 3 argument => object body, blue print -> schema , call back function
    Joi.validate(req.body,schema,(err,result)=>{

        if(err){
          console.log(err);
          res.send('errhas occured');

        }

          console.log(result);
          res.send('successfully posted data message from Server');
  //        res.json({success : true});

    });
    //database work here
//    res.send('successfully posted data');

});


app.listen(3000);
