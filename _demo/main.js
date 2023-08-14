// test push , feedback branch

function soundOfBird(){
    console.log('เสียงงง นกกรังหัวจุก');
}

soundOfBird();

function isPrime(n){
    
    let isPrime = true;
    for(let divider = 2; divider < n; divider++){
        if(n % divider == 0){
            isPrime = false
            break;
        }
    }
}

isPrime(5);

function myFunc(a){
    ///
}