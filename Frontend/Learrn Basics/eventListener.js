let button=document.querySelector("button");

//nodde.addEventListner(event,callback)
const h=()=>{
    console.log("This is handled");
}
button.addEventListener("click",h);

button.addEventListener("click",(e)=>{
    console.log("This is handled",e);
});

button.removeEventListener("click",h);//it removes first event listener