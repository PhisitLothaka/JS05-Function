//ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
//ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

 let x = +prompt("Enter number")
 let y = +prompt("Enter number")

    
  
function findmin(x,y){
    if(x > y){
        return console.log(y-1);
    }
        return console.log(x-1);
        
    
}
findmin(x,y);