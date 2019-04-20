const fs = require('fs');


// fs.writeFile('example','hello this is file was careate',(err)=>{
//
//   if(err){
//     console.log('write file not success please try again\n');
//   }
//   else{
//     fs.readFile('./example','utf8',(err,file)=>{
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log(file);
//       }
//
//     })
//     console.log('write file success');
//
//   }
//
// });

// write file in folder

fs.writeFile('./newFolder/example','hello this is file was careate',(err)=>{

  if(err){
    console.log('write file not success please try again\n');
  }
  else{
    // fs.readFile('./example','utf8',(err,file)=>{
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     console.log(file);
    //   }

  //  })
    console.log('write file success');

  }

});
