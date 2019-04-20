// event emitter

 const EventEmitter = require('events');
//
// const eventEmitter = new EventEmitter();
//
//   eventEmitter.on('tu',function(num1,num2){
//
//     console.log('tutorial event has occured');
//     console.log(num1*num2);
//   });

//eventEmitter.emit('tu',2,3);



class Person extends EventEmitter{

constructor(name){

  super();

  this._name = name;

} // constructor

  get name(){
    return this._name;

} // get
} // end class

let pedro = new Person('Pedro');
let Wanc = new Person('Wanc');




  pedro.on('name',()=>{

    console.log('my name is '+pedro.name);

  });

  Wanc.on('name',()=>{

      console.log('my name i s : '+ Wanc.name);


  });


pedro.emit('name');
Wanc.emit('name');
