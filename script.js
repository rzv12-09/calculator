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
    if(firstNumber === undefined)
        {
            firstNumber = getNumberFromDisplay(display);
        }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "-";
    isOperatorClicked = true;
});
div.addEventListener("click",(e) => {
    if(firstNumber === undefined)
        {
            firstNumber = getNumberFromDisplay(display);
        }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "/";
    isOperatorClicked = true;
});
multipl.addEventListener("click",(e) => {
    if(firstNumber === undefined)
        {
            firstNumber = getNumberFromDisplay(display);
        }
    display.textContent += ' ' +e.target.textContent +' '
    operator = "*";
    isOperatorClicked = true;
});


equal.addEventListener("click",() =>{
    if(!isEqualClicked){
        nextNumber = getNumberFromDisplay(display);
        firstNumber = operation(operator,firstNumber,nextNumber);
        display.textContent = firstNumber;  
        nextNumber = undefined;   
        isOperatorClicked = false;  
        isEqualClicked = true;
    }
})
