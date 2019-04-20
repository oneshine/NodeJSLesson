const fs = require('fs');

fs.rename('example','newName',(err)=>{

  if(err){
    console.log(err);
  }
  else{
    console.log('rename success');
  }

});
