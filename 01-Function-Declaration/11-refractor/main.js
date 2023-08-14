function checkAge1(age){
    if(age > 18){
        return true;
    }return confirm("Did parents allow you?");
}
function checkAge2(age){
    let ans = age > 18 ?  true : confirm("Did parents allow you?");
    return ans;
}
function checkAge3(age){
   let ans= (age > 18 === true || age < 18 === confirm("Did parents allow you?")) 
   return ans;
}
