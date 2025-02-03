// single line comment

/* 
multi-line comment
*/

// variables
//var

var numberOne = 3;

// const
const numberTwo = 5;
const PI = 3.14;

//let
let numberThree = 9;

console.log(PI);

function checkLet(){
    let numberFour = 10;
    console.log(numberFour);
}

checkLet();

/*
let name = 'Tarsis';
//t sex = 'male' 'female'

// String DataType*/
'', "", ``
let firstName = 'Tarsis & {lastName}';
let lastName = 'Mukiibi';
let middleName = 'Asa';


console.log(firstName);
console.log(lastName);
console.log(lastName.length);// length of string
console.log(lastName.toUpperCase());// to uppercase

//Boolean DataType
let isStudent = true;
let hasGraduated = false;

console.log(isStudent && hasGraduated);//and
console.log(isStudent || hasGraduated);//or


// Array DataType

let numberList = [1,2,3,4,5]
let numberListTwo = [6,7,8,9]
let fruitList= ['apples', 'mangoes', 'oranges']
console.log(numberList[3]);
console.log(numberList+numberListTwo);


fruitList.push('grapes');
console.log(fruitList);
fruitList.pop('grapes');
console.log(fruitList);


let personObject = {
    'name': 'Charles',
    'gender': 'male'
}

console.log(personObject.gender);

//Arithmetic Operators
console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);

//Comparison Operators
let numberSix = 2;
let numberSeven = '2';

console.log(numberSix == numberSeven);
console.log(numberSix === numberSeven);
