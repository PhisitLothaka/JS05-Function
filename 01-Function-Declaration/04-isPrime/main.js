// DESIGN FN
// 1-INPUT ? => number ที่ใข้เช็ค
// 2-LOGIC IMPLEMENT ?
// 3-OUTPUT ?

let number =prompt('Enter number :');

function primeNumber(num){
    let isPrime = true;
    for(let i = 2; i < num; i++){
        if(num  % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        alert(`Number : ${num} is prime`);
    }else{
        alert(`Number : ${num} is not prime`);
    }

    
}

primeNumber(number);