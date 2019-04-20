const fs = require('fs');


// read fpr check file in directory
fs.readdir('newFolder',(err,files)=>{

  if(err){
    console.log(err);
  }
  else{
    // display file name in directory
    console.log(files);

    // use loop to delete file in folder
    for(let file of files){
      fs.unlink('./newFolder/'+file,(err)=>{

        if(err){
          console.log(err);
        }// nest if
        else{
          console.log('delet file '+file+' in folder success');
        }// nest else

      });//fs.unlink

    }//for loop

    // remove folder after remove all file.
    fs.rmdir('./newFolder',(err)=>{

      if(err){
        console.log(err);
      }// if
      else{

        console.log('remove folder success');
      }// else
    });// fs.rmdir
  }// else
});
