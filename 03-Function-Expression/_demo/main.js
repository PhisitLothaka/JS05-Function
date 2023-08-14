console.log('anonymus');

// #1 : Named fn, FN Declaration
// function add (){}


// #2 : Anonymous

// #2A IIFE  : Intermediate Invoke Funcion Expression

// (function (x,y){
//     console.log(x + y);
// }) (10, 5);

// let a = (function (x,y){
//     return x + y;
// }) (10, 5);

// console.log(a);

// #2B

// AVRIABLE = FN (FN == EXPRESSION)
// Function as a Value

// ASSIGN anonymous FN to variable
// const myFunc = function(x,y){
//     return x + y;
// }
// console.log(myFunc(5,10))

// ASSIGN named FN to variable
// const a = console.log;
// a('hi');

// ### ANONYMOUS (MODERN : ARROW SUNTAX)

let z = function (x) {
    return x ** 2;
};
// A: Shortest
let a = x => x + 2; 
let b = (x,y) => x + y;

// B: Brecket
let c = (x,y) =>{
    let result = x + y ;
    return result;
}

console.log(a(2));
console.log(b(2,3));
