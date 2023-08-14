/*
### การเขียน function 
1. Function Fecl
2. Function

*/

/*
การใข้งานฟังก์ชันต้อง
1.ประกาศฟังก์ชัน => กำหนดชื่อ, input
2.เรียกใข้งาน
*/

// 1 Define
function sayHi(name, lastname){
    console.log(`Hello ${name} ${lastname}`);
}

// 2 Call
sayHi("John","Doe");
sayHi("Pavit", "Pinchanangul");

//  RETURN VALUE ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add(5,6) == Return Value, FN Result

function add(x,y) {
    // 0 sec.
    let result = x + y;

    // 5 sec.
    return  result;
}

crossOriginIsolated.log(11 === add(5,6));

let r = add(5,6); // reusable result
console.log(r);
console.log(r);

console.log(add(5,6)); // One time use
console.log(add(5,6)); // One time use


function isEven(n) {
    // if(n % 2 == 0){
    //     return true;
    // }else {
    //     return false;
    // }

    return n % 2 == 0;
    // return 6 % 2 === 0 (true)
    // return 5 % 2 === 0 (false)
}

console.log(isEven(6));
console.log(isEven(5));

// สรุป
// - Declare : ประกาศเป็น
// - Params :  รับ Input
// - Return :  เข้าใจเรื่อง Return
// - Call : รันฟังก์ชัน

// ### FN EXPRESSION

let a = 5* 2 + 7;
// FORMAT : variable = expression

/*
experssion 
 - single value : 7
 - convine expression : 7 + 2
 - FN result : add(7,2)
*/

let myFunc = add;
let z = console.log;
// FORMAT ; variable = FN (FN Rxpression)
// FN Expression : การ assign FN ให้กับ variable

console.log(5,2);
z("Hi") // z = console.log;

//  Anonymius FN

// SYNTAX : FN EXPRESSION
// อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปร sayHello

const sayHello = function (name){
    console.log("Hi " + name ); 
}

sayHello("Expression");

// Arro FN
// 1. function add () {}
// 2A. let add = function () {}
// 3B. let add = () => {}

// const minus = (a,b) => {
//     return a - b;
// };

const minus = (a,b) => a - b ;
const minusTwo = (a) => a - 2 ;
const two = 2 ;