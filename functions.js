 // two types,
// -void function
// - returning function

// returning
function addition(numberOne, numberTwo){
    return numberOne + numberTwo;
}


// void
function sum(numberOne, numberTwo){
    let summation = numberOne + numberTwo;
    console.log(summation);
}

sum(6,8);
console.log(addition(23,32));


// arrow functions
const subtraction = (numberOne, numberTwo) =>{
    return numberOne - numberTwo; 
}

const difference = (numberOne, numberTwo) =>{
    console.log(`the difference is ${numberOne-numberTwo}`);
}

console.log(subtraction(67,32));
difference(99,67)


// exercise
function welcome(name){
    console.log(`Welcome back, ${name}✨`)
}

welcome('Tarsis')

const welcomed = (name) =>{
    console.log(`Welcome back ${name}👋`);
}

welcomed('Tarsis')




let firstName = 'John';

addition(2, '2');