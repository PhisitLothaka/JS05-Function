{
const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // *undefined เพราะว่าใน function ไม่ได้ทำอะไรเลย
}

{
    const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** 28.274333882308138
}