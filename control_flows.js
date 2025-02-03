/**
 * IF STATEMENTS
 */


// Syntax

// if(condition){
//     logic
// }else if(condtion){
//     logic
// }else{
//     logic
// }

// age, child, adult, invalid


let personAge = 17;

if(0<personAge<18){
    console.log('Child')
}else if(personAge>18){
    console.log('adult')
}else{
    console.log('invalid')
} 




// switch (key) {
//     case value;
//     break;

//     case value:
//         break;

//     default:
//         break;
// }


let number = 5;

switch(number){
    case 1:
        console.log('This is Monday');
        break;
    case 2:
        console.log('This is Tuesday');
        break;
    case 3:
        console.log('This is Wednesday');
        break;
    case 4:
        console.log('This is Thursday');
        break;
    case 5:
        console.log('This is Friday');
        break;
    case 6:
        console.log('This is Saturday');
        break;
    case 7:
        console.log('This is Sunday');
        break;

    default:
        console.log('This does not exist');
        break;
}



// role based authetication
let role = 'student';

switch(role){
    case 'student':
        console.log('This is a student'); 
        // can put a function instaed of a console.log function
        break;
    case 'staff':
        console.log('This is staff');
        break;
    case 'admins':
        console.log('This is an admin');
        break;
 
    default:
        console.log('This does not exist');
        break;
}


// validation
let password = '12345';
let confirmPasword = '123456';

if (password === confirmPasword){
    console.log('password is the same')
}
else{
    console.log('password mismatch \n please try again')
}


// loops

// for loop

// for (initialization, condition, increment){
//     results
// }

// print the first 100 counting numbers

for (i=1; i<101; i=+1){
    console.log(i)
}


// while loop
// initialization
// while(condition){
//     // results
//     // increment
// }

i=1
while(i<101){
    console.log(i)
    i=+1
}


// for in loop // Arrays
let fruitList = ['Apples', 'Mangoes', 'Oranges']

for (fruit in fruitList){
    console.log(fruitList[fruit]);
}

// for of loop 
for (fruit of fruitList){
    console.log(fruit);
}

