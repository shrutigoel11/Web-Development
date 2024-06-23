class Person{
    constructor(){
        this.species="Homosapiens";
    }
}

class Engineer extends Person{
    constructor(branch){
super();
this.branch=branch;
    }
}

let Engineer1=new Engineer("CS");
console.log(Engineer1);