const readline = require('readline');

const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout });


let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
// let num1 = 1;
// let num2 = 4;

let answer = num1 + num2;

rl.question('what is ' +num1+' + '+num2 +' ?\n',

(userInput)=>{

if (userInput.trim() == answer){

//      console.log('your anseer is : '+userInput+'\n');
//      console.log('correct good job');
      rl.close();
}// if

else{

    rl.setPrompt('Incorrect respond please try again\n');
    rl.prompt();
    rl.on('line',(userInput)=>{

      if(userInput.trim()  == answer){
        rl.close();
      }// if
      else{
        rl.setPrompt('Incorrect respond please try again \n');
        rl.prompt();

      }// else
    });
}//else

});

rl.on('close',()=>{

  console.log('correct!!!!');
  rl.close();
});
