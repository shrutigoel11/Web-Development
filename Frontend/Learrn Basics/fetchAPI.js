let URL="https://api.restful-api.dev/objects";

let getfacts=async ()=>{
    let response= await fetch(URL);
    let data=response.json();
    console.log(data);
}

//using promise chaining

// function getfacts(){
//     fetch(URL).then((response)=>{
// return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }