const display = document.querySelector("#values");

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

let firstNumber;
let operator;
let nextNumber;

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

const buttonNumbers = document.querySelectorAll(".number");

for (let i  = 0; i <= 9 ; i++) {
    let button = document.getElementById(i);
    button.addEventListener("click", ()=> {
        display.textContent = i;
    })
}
