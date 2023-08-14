{
function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * error เพราะไม่ได้เรียกใช้ function
console.log(sayHi(10)); // ** 'Hi kid' 
}

{
function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** 'Hi John' เพราะใส่ ARTICLE
console.log(sayHi()); // **** 'who are you' เพราะใส่ไม่ได้ใส่ ARTICLE แล้ว if เป็น false
}
