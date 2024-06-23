let data="college data"
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
console.log(data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        data=prompt("Edit the data:");
        console.log(data)
    }
}

// let student=new User("Shruti","sg0616@srmist.edu.in");
// console.log(student);
 
let admin1=new Admin("Shruti","sg0616@srmist.edu.in");
console.log(admin1);