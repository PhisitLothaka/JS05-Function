// ให้เขียนฟังก์ชันคำนวณค่า factorial


const factorial = () => {
let num = prompt('Factorial :');

let result = num;
if( !(num == null || num.trim() =='') ){
    for(let i = 1; i < num;  i++){
        result = result * i;
      }
    console.log(`${num}! = ${result}`)
 } else return console.log("can't find value");
}

factorial();