const display = document.querySelector("#values");
const dot = document.getElementById(".");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const div = document.getElementById("/");
const multipl= document.getElementById("*");
const equal = document.getElementById("=");

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

let firstNumber = undefined;
let operator = undefined;
let nextNumber = undefined;
let isOperatorClicked = false;

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
        if(isOperatorClicked){
            resetDisplay(display);
            isOperatorClicked = false;
        }
        display.textContent += i;

    })
}


dot.addEventListener("click",(e) => {
    display.textContent += e.target.textContent;
})  


let isEqualClicked = false;

plus.addEventListener("click",(e) => {
    
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = operation(operator,firstNumber,nextNumber);
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
    

});
minus.addEventListener("click",(e) => {
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = operation(operator,firstNumber,nextNumber);
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

});
div.addEventListener("click",(e) => {
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = operation(operator,firstNumber,nextNumber);
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

});
multipl.addEventListener("click",(e) => {
    if(nextNumber === undefined && firstNumber !== undefined && !isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = operation(operator,firstNumber,nextNumber);
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

});


equal.addEventListener("click",() =>{
    if(!isEqualClicked && firstNumber != null && isOperatorClicked == false){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = Number((operation(operator,firstNumber,nextNumber)).toFixed(6));
        display.textContent = firstNumber;  
        nextNumber = undefined;   
        isOperatorClicked = false;  
        isEqualClicked = true;
    }
})
