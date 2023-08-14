const leapYear = (year) => {
    if(year % 400 === 0){

        return result = 366 ;
    }if (year % 100 === 0){
        return result = 365 ;
    } 
    if(year % 4 ===0){
        return result = 366 ;
    }else {
        return result = 365 ;
    }

}

const countBirthday = () => {
    let year = prompt('Enter The Brithyear :') ;
    let day = 0;
    for(year ; year <= 2020; year++){
            
        leapYear(year);
         day = day + result;
    }
    console.log(`Day : ${day}`);

}
countBirthday();
