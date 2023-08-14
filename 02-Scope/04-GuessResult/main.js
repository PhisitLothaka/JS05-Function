let x = 1;
function func() {
  console.log(x); // * 1 เพราะว่า x ที่ global ประกาศก่อน
  let x = 2;
}
func();