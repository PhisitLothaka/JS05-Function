
// GLOBAL SCOPE
// variable : message = identifier
// let message = 'hi';
// function sayHi == identifier
// function sayHi(){
// FUMNCTION SCOPE
//     message = "Hello";
//     console.log(`### ${message}`);
// }

// sayHi();
// console.log(message);

let message ='Global'
{
    let message = 'local';
    console.log(message);
}
console.log(message);
