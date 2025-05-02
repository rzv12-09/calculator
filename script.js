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

let firstNumber = undefined;
let operator = undefined;
let nextNumber = undefined;

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


for (let i  = 0; i <= 9 ; i++) {
    let button = document.getElementById(i);
    button.addEventListener("click", ()=> {
        display.textContent += i;
        if(firstNumber == undefined)
            firstNumber = i;
        else if(nextNumber == undefined)
            nextNumber = i;
        else{
            nextNumber = i;
        }
    })
}

const dot = document.getElementById(".");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const div = document.getElementById("/");
const multipl= document.getElementById("*");
const equal = document.getElementById("=");


dot.addEventListener("click",(e) => {
    display.textContent += e.target.textContent;
})  

plus.addEventListener("click",(e) => {
    display.textContent += ' ' +e.target.textContent +' '
    operator = "+";
});
minus.addEventListener("click",(e) => {
    display.textContent += ' ' +e.target.textContent +' '
    operator = "-";
});
div.addEventListener("click",(e) => {
    display.textContent += ' ' +e.target.textContent +' '
    operator = "/";
});
multipl.addEventListener("click",(e) => {
    display.textContent += ' ' +e.target.textContent +' '
    operator = "*";
});


equal.addEventListener("click",() =>{
    if (operator != undefined && firstNumber != undefined
        && nextNumber != undefined)
        {
        firstNumber = operation(operator,firstNumber,nextNumber);
        display.textContent = firstNumber;
        nextNumber = undefined;
    }
    })
