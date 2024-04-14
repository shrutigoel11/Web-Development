let button=document.querySelector("button");
button.onclick=()=>{
    console.log("You clicked a button")
}
//External js has mpre priority than inline js file;

//One event handled once 

//if more than one handler then last defined handler is chosen;
button.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}