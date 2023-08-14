{
const showModal = alert;
showModal("Execute modal"); // *alert('Execute modal') variable สามารถเก็บ Function ได้
}

{
const showModal = alert();
showModal("Execute modal"); // ** alert('') ได้เพราะประกาศเรียกใช้ไปแล้ว
}