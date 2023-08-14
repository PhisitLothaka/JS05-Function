// หาร 4 ลงตัว => true
// 1800 => false
// 1900 => false
// 2000 => true

// 100 ลงตัวไม่เป็น Leap Year *** ยกเว้นหาร 400 ลงตัวเป็น Leap Year
// ที่เหลีอ หาร 4 ลงตัวเป็น Leap Year

// 1 Year == 365.00 (เศษ 0.242199)
// 

const isLeapYear = (year) => {
    // # NOMAL #
    // if (year % 400 === 0){
    //     return true;
    // }else if(year % 100 === 0){
    //     return false;
    // }else if(year % 4 === 0){
    //     return true;
    // } return false;

    // ### Advance ###
    
    // if(year % 100 == 0 ) {
    //     return year % 400 === 0;
    // } return year % 4 === 0; 

    // ####### ADVANCE #######
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

};

// cost isLeapYear = (year) => return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;