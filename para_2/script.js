//true(1); 
// false(0,NaN,null,undefined,On,''); 

// let a = 10, b = '10';
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

// let a = +prompt('виведи число:')
// let b = +prompt('виведи число:')
// let c;

// if (a>b){
//     c = 'a > b'
// } else if(a<b) {
//     c = 'a<b'
// }
// else{
//     c = 'a==b'
// }
// alert(c);

// if(a > b)c = 'a>b';
// else if(a<b) c = 'a<b'
// else c = 'a == b'
// alert(c) 

// let course = prompt('курс:'), title;
// switch (course) {
//     case 'figma':
//         title = 'figma';
//         break;

//     case 'WEB':
//         title = "Html + css";
//         break;

//     case 'js':
//         title = 'js'
//         break;

//     default:
//         title = 'курсів не знайдено'
// }
// alert(title)

//_______________________________

// let title = prompt("Введіть назву товару:");
// let count = Number(prompt("Введіть кількість:"));
// let price = Number(prompt("Введіть ціну за одиницю:"));

// let total = count * price;

// if (total > 5000) {
//   total = total * 0.9; 
// }

// alert("Товар: " + title + " Загальна сума: " + total + " грн");

// let choice = Number(prompt("Оберіть спосіб доставки:1 — Кур'єр; 2 — Пошта; 3 — Самовивіз"));
// let shippingCost;

// switch (choice) {
//   case 1:
//     shippingCost = 150; 
//     break;
//   case 2:
//     shippingCost = 80; 
//     break;
//   case 3:
//     shippingCost = 0; 
//     break;
// }

// alert("Вартість доставки: " + shippingCost + " грн");

let a = true;
console.log(!a);

let a = 10, b = 12, c = 5;
if (a>b && a > c){
    console.log(a);
} else if(b>a || a > c) {
    
}
