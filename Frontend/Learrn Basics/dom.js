//get attribute

let div=document.querySelector("div");
console.log(div.getAttribute("id"));

let h4=document.querySelector("h4");
console.log(h4.getAttribute("class"));

//set attribute

let news=(h4.setAttribute("class","mynewclass"));
console.log(h4.getAttribute("class"));

//change style


h4.style.backgroundColor='red';

//insert element:create and add

let newbutt=document.createElement("button");
newbutt.innerText="push me";
console.log(newbutt.innerText);

//add accordingly

let h1=document.querySelector("h1");
// h1.append(newbutt);

// h1.prepend(newbutt);

// h1.after(newbutt);

h1.before(newbutt);

let newHeading=document.querySelector("h1");
newHeading.innerText="THIS IS NEW HEADING";
h1.after(newHeading);

//delete a node i.e. element from dom tree

newbutt.remove();