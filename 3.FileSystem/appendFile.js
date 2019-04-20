const fs = require('fs');

fs.appendFile('example','this is append\n',(err)=>{

  if(err){
    console.log(err);
  }
  else{

    fs.readFile('example','utf8',(err,file)=>{
      console.log(file);
    });
  }
});
