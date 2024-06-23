//first get display 

const display = document.getElementById("display");

//Now create functions namely AppendToDisplay(parameters), Calculate(),Clear()

function AppendToDisplay(input){
    display.value += input;
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function Clear(){
    display.value = "";
}