const express = require('express');
const path = require('path');


const app = express();

// app.use function for use middle ware
// show folder name to public as /public ( alais name)
      // app.use('/public',express.static(path.join(__dirname,'static')));
      //
      // app.get('/',(req,res)=>{
      //
      //   //res.send('hello express');
      //     res.sendFile(path.join(__dirname,'static','index.html'));
      //
      // });

// test folder
              // alias name = /hel              old folder name = test
      app.use('/hel',express.static(path.join(__dirname,'test')));

      app.get('/',(req,res)=>{

                                // folder name     file name
          res.sendFile(path.join(__dirname,'test','test.html'));

      });

app.listen(3000);
