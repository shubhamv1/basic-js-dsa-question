var object1 ={value:10};
var object2= object1;
var object = {value: 10}

// context vs scope

 const object4={
    a:function (){
        console.log(this);
    }
 }
 // instantiation

 class Player {
    constructor(name,type){
        this.name=name;
        this.type=type;

    }
    introduction(){
        console.log(`Hi i am ${this.name}, I am a ${this.type}`)
    }
 }

 class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }


    play(){
        console.log(`I'm a ${this.type}`);

    }
}
    const wizard1= new Wizard('sh','Dev');
 