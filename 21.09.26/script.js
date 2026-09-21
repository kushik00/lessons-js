// for (let i = 10; i >= 1; i--) {
//     console.log(`${11-i} - ` + i);    
// }

// sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//     if( i >= 20 || i % 3 === 0 && 6 === 0){
//         console.log(i);
//         break
//     }
    
// }

// for (let i = 1; i <= 100 ; i++) {
//     if(i % 5 === 0){
//         continue
//     }
//     console.log(i);
// }

let studentsCount = +prompt('введіть кількість учнів:')
if (studentsCount > 0 ){
    let sum = 0, highLevel = 0, other = 0, av;
    let minCrade = 12, maxGrade = 1
    for (let i = 1; i <= studentsCount ; i++) {
        let grade = +prompt(`введіть оцінку учня № ${i} від 1 до 12`)
        if (!(grade >= 1 && grade <= 12)){
            alert(`error`)
            i--;
            continue
        }
        sum += grade;
        
        if (grade >= 10 ) {
            highLevel++            
        } else {
            other++
        }
        if(grade < minCrade){
            minCrade = grade
        }
        if(grade > maxGrade){
            maxGrade = grade
        }
    }
    av = sum / studentsCount
}
alert(`кількість учнів ${studentsCount}\n Сума оцінок: ${sum}\n середня оцінка класу: ${av}\n мінмальна оцінка: ${minCrade} максимальна оцінка: ${maxGrade} високий рівень: ${highLevel} інші: ${other}`)