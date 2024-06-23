

let tempUnits = ["Kelvin", "Celsius", "Fahrenheit"];
let selectOptions = document.querySelectorAll(".dropdown select");
let button=document.querySelector("form button");
const from=document.querySelector(".from select");
const to=document.querySelector(".to select");
let msg=document.querySelector(".msg");
for (let select of selectOptions) {
  for (let unit of tempUnits) {
    console.log(unit);
    let newOption = document.createElement("option");
    newOption.innerText = unit;
    newOption.value = unit;
    // console.log(unit);
    if (select.name === "from" && unit === "Celsius") {
      newOption.selected = true;
    }
    if (select.name === "to" && unit === "Fahrenheit") {
      newOption.selected = true;
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    console.log(select);
  });
}

button.addEventListener("click",async(evt)=>{
evt.preventDefault();
let temper=document.querySelector(".temperature input");
let tempVal=temper.value;
if(tempVal==" " || tempVal< 1){
    tempVal=1;
    temper.value="1";
}

const BaseURL ='https://congen-temperature-converter-v1.p.rapidapi.com/convert';
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': 'd7096747f9msh83fade8f17ae406p1bede6jsn8b4052292585',
		'X-RapidAPI-Host': 'congen-temperature-converter-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(BaseURL, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
};


const URL=`${BaseURL}?from=${from.value.toLowerCase()}&to=${to.value.toLowerCase()}&value=${temper}&decimal=2`;
let response=await fetch(URL);
let data=response.json();
let rate = data[to.value.toLowerCase()];

let finalAmount = tempVal * rate;
msg.innerText = `${tempVal} ${from.value} = ${finalAmount} ${to.value}`;
});


//Note: Subscribe to API to convert.