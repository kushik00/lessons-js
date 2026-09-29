let event = prompt("Тип події (1 кіно, 2 театр, 3 концерт): ");
let price = 0;

while (price === 0) {
  switch (event) {
    case "1":
      price = 150;
      break;
    case "2":
      price = 220;
      break;
    case "3":
      price = 350;
      break;
    default:
      event = prompt("Ще раз (1, 2 або 3): ");
  }
}

let day = prompt("Тип дня (1 будній, 2 вихідний): ");
while (day !== "1" && day !== "2") {
  day = prompt("Ще раз (1 або 2): ");
}
if (day === "2") {
  price = price * 1.15;
}

let count = Number(prompt("Кількість квитків (1-6): "));
while (!(count >= 1 && count <= 6)) {
  count = Number(prompt("Ще раз (1-6): "));
}

let processed = 0;
let free = 0;
let discount = 0;
let full = 0;
let total = 0;

for (let i = 1; i <= count; i++) {
  let age = Number(prompt("Вік квитка " + i + " (-1 щоб закінчити): "));
  while (!(age >= -1)) {
    age = Number(prompt("Ще раз вік: "));
  }

  if (age === -1) {
    break;
  }

  processed++;

  if (age <= 5) {
    free++;
    continue;
  }

  let ticket = price;
  let hasDiscount = false;

  if (age <= 12) {
    ticket = price * 0.5;
    hasDiscount = true;
  } else if (age <= 17) {
    ticket = price * 0.8;
    hasDiscount = true;
  } else if (age >= 60) {
    ticket = price * 0.75;
    hasDiscount = true;
  } else if (age <= 25) {
    let student = prompt("Студентський квиток? (так/ні): ");
    while (student !== "так" && student !== "ні") {
      student = prompt("Ще раз (так/ні): ");
    }
    if (student === "так") {
      ticket = price * 0.9;
      hasDiscount = true;
    }
  }

  if (hasDiscount) {
    discount++;
  } else {
    full++;
  }

  total = total + ticket;
}

if (total > 1000) {
  total = total * 0.95;
}

console.log("Оброблено:", processed);
console.log("Безкоштовних:", free);
console.log("Зі знижкою:", discount);
console.log("За повною ціною:", full);
console.log("Сума:", total.toFixed(2), "грн");