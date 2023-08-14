const dayToSecond = (day) => {
    let result = day * ((24 * 60) * 60);
    return result;
}
let secondInDay = prompt("Enter a day :");
secondInDay = alert(dayToSecond(secondInDay)+` second`);