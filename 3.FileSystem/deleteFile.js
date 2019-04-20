const fs = require('fs');


fs.unlink('example',(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('deleted file success');
  }

});
