const fs = require('fs');

fs.mkdir('newFolder',(err)=>{
  if(err){
    console.log(err);
  }
  else {
      console.log('newFolder create success');
  }
  
});
