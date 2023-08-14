const farToCel = () => {
    let temp = +prompt("farenheit to celsius : ")
    
    let result = (5/9) * (temp-32);
    return console.log(result);
}

farToCel();