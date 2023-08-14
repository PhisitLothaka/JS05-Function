function checkprime(number){
    let isPrime = true;
    for(let i = 2; i < number;i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(number);
    }
}
function printPrime(limit){
    for(let n = 2; n < limit; n++){
        checkprime(n);
    }
}

let number = prompt('limit prime : ');

printPrime(number);