// 0-12
// 12-18
// 18+

//1
// let number = +alert(prompt('ваш вік:'));

// if ( number >= 18 ) {
//      console.log('дорослий');
// } else if( age > 12){
//     console.log('підліток');
// } else{
//     console.log('дитина');
// }

//2
// запитати логін та пароль у користовача
// const login = 'admin'
// const password = '12345'

// let age_user = prompt('юзер')
// let age_password = prompt('пароль')
// if (login === age_user && password === age_password){
//     alert('ok')
// } 

//3
// let day = +prompt('введи номер дня тижня')
// if (!(day < 1 && day > 7)) {
//     switch (day){
//         case 1:
//             console.log('поделілок');
//             break
//         case 2:
//             console.log('вівторок');
//             break
//         case 3:
//             console.log('середа');
//             break
//         case 4:
//             console.log('четверг');
//             break
//         case 5:
//             console.log('пятниця');
//             break
//         case 6:
//             console.log('субота');
//             break
//         case 7:
//             console.log('неділя');
//             break
//     }
// }


//4

let title = prompt("Введіть назву товару:");
let count = Number(prompt("Введіть кількість:"));
let price = Number(prompt("Введіть ціну за одиницю:"));
let shopCard = confirm("Чи є у тебе карта магазину?");
let deliveryType = prompt("кур'єр, пошта, самовивіз");

let total = count * price;

let discount = 0;
if (total >= 5000 || shopCard) {
    discount = 10;
}

let discountedTotal = total * (1 - discount / 100);

let deliveryCost = 0;
switch (deliveryType) {
    case "пошта":
        deliveryCost = 100;
        break;
    case "кур'єр":
        deliveryCost = 200;
        break;
    case "самовивіз":
        deliveryCost = 0;
        break;
}

let finalPrice = discountedTotal + deliveryCost;

alert("Фінальна сума до сплати: " + finalPrice + " грн");
