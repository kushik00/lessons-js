// function showMessage() {
//     console.log('hello world');
// }

// showMessage();

// function showProduct(name, price = 'нама у наявності') {
//     console.log(`Товар ${name} : ${price} грн`);
// }
// showProduct('notebok', 15000)

// function calcolate(price, count) {
//     return price * count ;
// }

// let total = calcolate(1000, 4)
// console.log(total);

// function discount(total) {
//     if (total >= 5000 ){
//         return 10;
//     }
//     else{
//         return 0;
//     }
// }
// let discount1 = +prompt('please enter a number')
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//     return price * count;
// }

// function getDiscount(total) {
//     if (total >= 10000){
//         return 0.15;
//     }
//     else if (total >= 5000){
//         return 0.1
//     } else if( total >= 2000){
//         return 0.05
//     }else {
//         return 0 
//     }
// }

// function getDscountValue(total, percent) {
//     return total * percent
// }

// function getFinalPrice(total,  discount) {
//     return total - discount
// }

// let productName = prompt('enter product name')
// let productPrice = +prompt('enter price')
// let productCount = +prompt('enter count')

// let productTotal = getProductTotal(productPrice, productCount)
// let discount = getDiscount(productTotal)
// let productDiscountValue = getDscountValue(productTotal, discount)
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue)

// console.log(`товар: ${productName}`);
// console.log(`ціна: ${productPrice} грн`);
// console.log(`кількість: ${productCount}`);
// console.log(`сума: ${productTotal} грн`);
// console.log(`знижка: ${discount} %`);
// console.log(`сума знижки: ${productDiscountValue} грн`);
// console.log(`до сплати: ${productFinalPrice} грн`);


// -------------------------------
// поїдка на машині в інше місто, звідки старуємо, фініш, відстань, розхід пального літрів на 100км, віртість за один літр пального, скільки потрібно грошей 
// function getFuelNeeded(distance, fuelConsumption) {
//     return (distance / 100) * fuelConsumption;
// }
// function getTotalFuelCost(fuelNeeded, fuelPrice) {
//     return fuelNeeded * fuelPrice;
// }

// function getCostPerKm(fuelConsumption, fuelPrice) {
//     return (fuelConsumption / 100) * fuelPrice;
// }

// let startCity = prompt('Звідки стартуємо?');
// let finishCity = prompt('Куди прямуємо?');
// let distance = +prompt('Відстань між містами');
// let fuelConsumption = +prompt('Розхід пального');
// let fuelPrice = +prompt('Вартість 1 літра пального');

// let fuelNeeded = getFuelNeeded(distance, fuelConsumption);
// let totalCost = getTotalFuelCost(fuelNeeded, fuelPrice);
// let costPerKm = getCostPerKm(fuelConsumption, fuelPrice);

// console.log(`Маршрут: ${startCity} - ${finishCity}`);
// console.log(`Відстань: ${distance} км`);
// console.log(`Розхід пального: ${fuelConsumption} л / 100 км`);
// console.log(`Ціна пального: ${fuelPrice} грн/л`);
// console.log(`Необхідно пального: ${fuelNeeded.toFixed(2)} л`);
// console.log(`Вартість 1 км дороги: ${costPerKm.toFixed(2)} грн`);
// console.log(`Загальна сума на поїздку: ${totalCost.toFixed(2)} грн`);



let savedLogin = "";
let savedPassword = "";
let isRegistered = false;

function registerUser() {
    savedLogin = prompt("Введіть логін для реєстрації:");
    savedPassword = prompt("Введіть пароль для реєстрації:");
    isRegistered = true;
    alert("Реєстрація успішна!");
}

function loginUser() {
    if (!isRegistered) {
        alert("Спочатку зареєструйся!");
        return;
    }

    let attempts = 3;

    while (attempts > 0) {
        let inputLogin = prompt("Введіть логін:");
        let inputPassword = prompt("Введіть пароль:");

        if (inputLogin === savedLogin && inputPassword === savedPassword) {
            alert("Вхід дозволено!");
            return;
        } else {
            attempts = attempts - 1;

            if (attempts > 0) {
                alert("Неправильно! Залишилось спроб: " + attempts);
            } else {
                alert("Вхід заблоковано!");
            }
        }
    }
}

function startApp() {
    let choice = "";

    do {
        choice = prompt("1 — Зареєструватися\n2 — Увійти в акаунт\n0 — Вийти");

        if (choice === "1") {
            registerUser();
        } else if (choice === "2") {
            loginUser();
        } else if (choice === "0") {
            alert("Вихід з програми");
        } else {
            alert("Невідомий пункт меню!");
        }

    } while (choice !== "0");
}

startApp();
