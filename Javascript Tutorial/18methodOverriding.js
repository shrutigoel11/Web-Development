class Parent{
    constructor(){
        this.species="Parent"
    }
    eat(){
        console.log("Parent eats");
    }
}
class Child extends Parent{
    eat(){
        console.log("Child eats");
    }
}

//When both parent and child have same method the method of child class is invoked; Method Overriding

let obj1=new Child;
console.log(obj1);