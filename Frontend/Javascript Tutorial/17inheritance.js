class Parent{
    constructor(){
        this.species="Parent"
    }
}
class Child extends Parent{
    eat(){
        console.log("Child eats");
    }
}

//extends is used to inherit properties and methods of parent

let obj1=new Child;
console.log(obj1);