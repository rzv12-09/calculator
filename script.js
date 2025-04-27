function add(...numbers) {
    return numbers.reduce((total,val) => total+val),0;
}

function substract(initialValue,...numbers) {
    return numbers.reduce((result,val) => result - val,initialValue);
}