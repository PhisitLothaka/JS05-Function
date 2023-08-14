const isPrime = (n) => {
    for(let i = 2; i < n; i++ ){
        if(n % i === 0 ){
            alert(`Number : ${n} is not Prime`);
            break;
        }else{
            alert(`Number : ${n} is Prime`);
            break;
        }
    }
}
let number = prompt("Enter Number :");
isPrime(number);