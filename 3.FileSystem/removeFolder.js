const fs = require('fs');

fs.rmdir('newFolder',(err)=>{

    if(err){
      console.log(err);
    }
    else{
      console.log('remove folder success');
    }
});
