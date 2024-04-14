let sourceList = ["Station 1", "Station 2", "Station 3","Station 4", "Station 5", "Station 6","Station 7", "Station 8", "Station 9","Station 10"]; 
let destinationList = ["Station 1", "Station 2", "Station 3","Station 4", "Station 5", "Station 6","Station 7", "Station 8", "Station 9","Station 10"];

const addOption=(list,value,text)=>{
    const option=document.createElement("option");
    option.text=text;
    option.value=value;
    list.appendChild(option);
}

let source=document.querySelector("#source-list");
let destination=document.querySelector("#destination-list");
console.log(source);
//addOption(source,element,element) so we use loop

sourceList.forEach((elemment)=>{
    addOption(source,elemment,elemment);
}
);
destinationList.forEach((elemment)=>{
    addOption(destination,elemment,elemment);
}
);

