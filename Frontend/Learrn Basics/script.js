console.log('Javascript');
alert("Tutorial");
// dir prints properties and methods 

console.dir(window.document);
let getid=document.getElementById("myid");
let getclass=document.getElementsByClassName("myclass");
let gettag=document.getElementsByTagName("button");
console.log(getid);
console.log(getclass);
console.log(gettag);

let elements=document.querySelector("p");
console.dir(elements);
console.log(getid.tagName);
let div=document.querySelector("div");
console.dir(div);