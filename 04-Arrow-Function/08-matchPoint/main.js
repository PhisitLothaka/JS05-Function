// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน
// TEAM MATCH : 38 [ignore]
// WIN : 28 => * = 84 [significant]
// DRAW : 5 => 5 * 1 = 5[signficant]
// LOSE : 5 => 5 * 0 = 0 [ignore]

// TOTAL : 89


const calPointMatch = (win,draw) => {return win * 3 + draw}
let win = prompt()
