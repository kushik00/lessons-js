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
let shopCard = confirm('чи є у тебе карта магазину?')
let deliveryType = prompt('курер, пошта, самовивіз')

let total = count * price;

//<2000 - 0%
//>2000 - 5%
//5000 - 10%
//>10000 - 15%

let shopDiscount = 0
if (total >= 10000){
    shopDiscount = 15
} else if ( total >= 5000){
    shopDiscount = 5
}

//<2000 - 5%
//>2000 - 10%
//5000 - 12%
//>10000 - 15%

let shopDiscountCard 