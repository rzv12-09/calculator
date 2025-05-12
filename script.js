const display = document.querySelector("#values");
const dot = document.getElementById(".");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const div = document.getElementById("/");
const multipl= document.getElementById("*");
const equal = document.getElementById("=");
const allClear = document.getElementById("allclear");
const clear = document.getElementById("clear");

let firstNumber = undefined;
let operator = undefined;
let nextNumber = undefined;
let isOperatorClicked = false;
let isEqualClicked = false;
let isTungTung = false;
let isReadyToReset = false;
let isDotPressed = false;

function add(...numbers) {
    return numbers.reduce((total,val) => total+val,0);
}

function substract(initialValue,...numbers) {
    return numbers.reduce((result,val) => result - val,initialValue);
}

function multiply(...numbers){
    return numbers.reduce((result,val) => result * val,1);
}

function divide(...numbers){
    return numbers.reduce((result,val) => result / val);
}


function resetValues() {
    firstNumber = undefined;
    operator = undefined;
    nextNumber = undefined;
    isOperatorClicked = false;
    isEqualClicked = false;
    isDotPressed = false;
}

function operation(operator,firstNumber,nextNumber) {
    switch (operator){
        case '+':
            return add(firstNumber,nextNumber);
        case "-":
            return substract(firstNumber,nextNumber);
        case "*":
            return multiply(firstNumber,nextNumber);
        case "/":
            return divide(firstNumber,nextNumber);
        default:
            alert("Not a valid operator!");

    }
}

function getNumberFromDisplay(display) {
    let result = display.textContent;
    return Number(result);
}

function resetDisplay(display) {
    display.textContent = '';
}

for (let i  = 0; i <= 9 ; i++) {
    let button = document.getElementById(i);
    button.addEventListener("click", ()=> {
        if(isReadyToReset) {
            isReadyToReset = false;
            resetValues();
            resetDisplay(display);
        }
        if(isTungTung) {
            resetDisplay(display);
            isTungTung = false;
            isDotPressed = false;
        }
        if(isOperatorClicked){
            resetDisplay(display);
            isOperatorClicked = false;
            isDotPressed = false;
        }
        display.textContent += i;

    })
}

dot.addEventListener("click",(e) => {
    if(!isDotPressed){
        display.textContent += e.target.textContent;
        isDotPressed = true;
    }
})  

plus.addEventListener("click",(e) => {
   if(isOperatorClicked) {
    display.textContent = "" + firstNumber + " +"
    operator = "+";
    return;
   }
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = Number((operation(operator,firstNumber,nextNumber)).toFixed(6));
        display.textContent = firstNumber + " +";
        nextNumber = undefined;
        isOperatorClicked = true;
        operator = "+"; 
        return;
    }
    if(firstNumber === undefined)
    {
        firstNumber = getNumberFromDisplay(display);
        
    }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "+";
    isOperatorClicked = true;
    isEqualClicked = false;
    isReadyToReset = false;
    

});

minus.addEventListener("click",(e) => {
    if(isOperatorClicked) {
        display.textContent = "" + firstNumber + " -"
        operator = "-";
        return;
       }
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = Number((operation(operator,firstNumber,nextNumber)).toFixed(6));
        display.textContent = firstNumber + " -";
        nextNumber = undefined;
        isOperatorClicked = true; 
        operator = "-";
        return;
    }
    if(firstNumber === undefined)
        {
            firstNumber = getNumberFromDisplay(display);
        }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "-";
    isOperatorClicked = true;
    isEqualClicked = false;
    isReadyToReset = false;
});

div.addEventListener("click",(e) => {
    if(isOperatorClicked) {
        display.textContent = "" + firstNumber + " /"
        operator = "/";
        return;
       }
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = Number((operation(operator,firstNumber,nextNumber)).toFixed(6));
        if(firstNumber === Infinity){
            display.textContent = "Tung tung tung Sahur";
            isTungTung = true;
            resetValues();
            return;
        }
        display.textContent = firstNumber + " /";
        nextNumber = undefined;
        isOperatorClicked = true; 
        operator = "/";
        return;
    }
    if(firstNumber === undefined)
        {
            firstNumber = getNumberFromDisplay(display);
        }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "/";
    isOperatorClicked = true;
    isEqualClicked = false;
    isReadyToReset = false;
    
});

multipl.addEventListener("click",(e) => {
    if(isOperatorClicked) {
        display.textContent = "" + firstNumber + " *"
        operator = "*";
        return;
       }
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = Number((operation(operator,firstNumber,nextNumber)).toFixed(6));
        display.textContent = firstNumber + " *";
        nextNumber = undefined;
        isOperatorClicked = true; 
        operator = "*";
        return;
    }
    if(firstNumber === undefined)
        {
            firstNumber = getNumberFromDisplay(display);
        }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "*";
    isOperatorClicked = true;
    isEqualClicked = false;
    isReadyToReset = false;

});

equal.addEventListener("click",() =>{
    if(!isEqualClicked && firstNumber != null && isOperatorClicked == false){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = Number((operation(operator,firstNumber,nextNumber)).toFixed(6));
        if(firstNumber === Infinity || firstNumber === -Infinity){
            display.textContent = "You think you are smart?";
            isTungTung = true;
            resetValues();
            return;
        }
        display.textContent = firstNumber;  
        nextNumber = undefined;   
        isOperatorClicked = false;  
        isEqualClicked = true;
        isReadyToReset = true;
    }
})

allClear.addEventListener("click",() =>{
    resetDisplay(display);
    resetValues();
})

clear.addEventListener("click",() => {
    if(isEqualClicked)
        return;
    let string;
    if(isOperatorClicked){
        string = display.textContent.trim().split("");
        string.pop();
        isOperatorClicked = false;
        firstNumber = undefined;
        display.textContent = string.join("");
        return;
    }
    string = display.textContent.split("");
    if(string.pop() === "."){
        isDotPressed = false;
    }
    display.textContent =string.join(""); 
})
