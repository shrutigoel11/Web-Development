let btn=document.querySelector("button");
// let body=document.querySelector("body");
let currMode="light";

btn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        // body.classList.add("dark");
        // body.classList.remove("light");
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="light";
        // body.classList.add("light");
        // body.classList.remove("dark");
         document.querySelector("body").style.backgroundColor="white";
        }
        console.log(currMode);

});