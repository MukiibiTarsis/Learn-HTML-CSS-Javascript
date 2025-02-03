const PI = 3.14;
const adultAge = 18;
const oldAge = 60;

let name = 'Tarsis';
let firstName = 'Asa';
let lastName = 'Mukiibi';

function checkAge(){
    age= oldAge - adultAge
    console.log(age)
}

checkAge()

console.log(firstName.length);
console.log(lastName.toUpperCase());

let isStudent = true;
let hasGraduated = false;

console.log(isStudent && hasGraduated);
console.log(isStudent || hasGraduated);

let numberList = [1,2,3,4,5]
let numberListTwo = [6,7,8,9]

console.log(numberList[3]);
console.log(numberListTwo + numberList);


numberList.push(6)
numberListTwo.pop(9)

let personObject = {
    'name' : 'Charles',
    'gender' : 'male'
}

