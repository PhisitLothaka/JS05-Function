function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * error เพราะ เรียกcall function ไม่ถูก
console.log(sayHi(10)); // ** alert "Hi kid"