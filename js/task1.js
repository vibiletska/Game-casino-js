const numberOne = Number(prompt('Enter first number'));
const numberTwo = Number(prompt('Enter second number'));
let result = ' ';
if (
    typeof numberOne !== 'number' 
    || isNaN(numberOne) 
    || typeof numberTwo !== 'number' 
    || isNaN(numberOne)
    ||numberOne >= numberTwo
    ) {
        alert('Invalid input data');
} else { 
    for (let i = numberOne +1; i<numberTwo; i++) {
    result += i + ' ';
}
    alert('Numbers between first and second numbers' + result); 
}