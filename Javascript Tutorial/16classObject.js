//Create a class

class Car{
    constructor(brand,mileage){
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Car starts");
    }
}

//Create an object

let fortuner=new Car("toyota",100);
console.log(fortuner);