// Synchronous
// step one
console.log('1. Boiling Water')

//step two
console.log('2. Water is ready')

//step three
console.log('3. Other tasks ie. bring cups')




// Asynchronous
console.log('1. Boiling Water')
setTimeout(() =>{
    console.log('2. Water is ready');
}, 4000);

console.log('3. Other tasks ie. bring cups');