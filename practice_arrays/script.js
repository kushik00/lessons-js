let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let name = prompt("Як тебе зовуть?");
while (name === "" || name === null) {
    name = prompt("Введи ім'я обов'язково!");
}

let day = Number(prompt("Який день народження? (число від 1 до 31)"));
let month = Number(prompt("Який місяць народження? (число від 1 до 12)"));

let personalNumber = (name.length + day + month) % topics.length;
alert("Твій вебінар: " + topics[personalNumber]);

let catalog = "Каталог вебінарів:\n";
for (let i = 0; i < topics.length; i++) {
    let status = "";
    if (seats[i] > 0) {
        status = "Набір відкрито";
    } else {
        status = "Місць немає";
    }
    catalog += (i + 1) + ". " + topics[i] + " - " + seats[i] + " місць (" + status + ")\n";
}
alert(catalog);

let minSeats = Number(prompt("Введи мінімальну кількість місць:"));
let filterRes = "Підходять:\n";
let foundFilter = 0;
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= minSeats) {
        filterRes += topics[i] + "\n";
        foundFilter++;
    }
}
if (foundFilter > 0) {
    alert(filterRes);
} else {
    alert("Нічого не знайдено");
}


let searchName = prompt("Введи назву вебінару для пошуку:");
if (searchName === null) {
    alert("Пошук скасовано");
} else {
    let foundIdx = -1;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === searchName) {
            foundIdx = i;
        }
    }
    
    if (foundIdx === -1) {
        alert("Такого вебінару немає");
    } else if (seats[foundIdx] <= 0) {
        alert("Місць немає");
    } else {
        let wantToBook = confirm("Записатися на " + topics[foundIdx] + "?");
        if (wantToBook === true) {
            seats[foundIdx] = seats[foundIdx] - 1;
            alert("Успіх! Залишилось місць: " + seats[foundIdx]);
        } else {
            alert("Скасовано");
        }
    }
}



let participants = [name];
for (let i = 0; i < 4; i++) {
    let p = prompt("Введи ім'я учасника " + (i + 2) + ":");
    if (p === null) {
        break;
    }
    if (p === "") {
        p = "Без імені";
    }
    participants.push(p);
}

let partList = "Учасники:\n";
for (let i = 0; i < participants.length; i++) {
    partList += (i + 1) + ". " + participants[i] + "\n";
}
alert(partList);

let longerCount = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > name.length) {
        longerCount++;
    }
}
alert("Довших імен за твоє: " + longerCount);

let changeYes = confirm("Хочеш змінити якесь ім'я?");
if (changeYes === true) {
    let indexToChange = Number(prompt("Введи номер учасника:")) - 1;
    if (indexToChange >= 0 && indexToChange < participants.length) {
        let newName = prompt("Введи нове ім'я:");
        if (newName !== "" && newName !== null) {
            participants[indexToChange] = newName;
        }
    }
}


let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (day + month) % 7;
let personalVisits = [];
for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];
    
    for (let i = 0; i < values.length; i++) {
        sum = sum + values[i];
        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    }
    
    let avg = sum / values.length;
    return [sum, avg, max, min];
}

let stats = getVisitStats(personalVisits);
let porig = Number(prompt("Введи поріг відвідуваності:"));
let porigCount = 0;
let porigIndexes = "";

for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= porig) {
        porigCount++;
        porigIndexes += (i + 1) + " ";
    }
}

alert("Бонус: " + bonus + "\nСума: " + stats[0] + "\nСереднє: " + stats[1] + "\nМакс: " + stats[2] + "\nМін: " + stats[3] + "\nКількість вище порогу: " + porigCount);

let showPorig = confirm("Показати номери вебінарів?");
if (showPorig === true) {
    alert("Номери: " + porigIndexes);
}


let menuExit = false;
do {
    let menu = prompt("Меню:\n1 - Показати\n2 - Додати\n3 - Перейменувати\n4 - Знайти\n5 - Видалити останній\n0 - Вихід");
    
    if (menu === null) {
        let exitConfirm = confirm("Вийти?");
        if (exitConfirm === true) {
            menuExit = true;
        }
    } else if (menu === "1") {
        let text = "";
        for (let i = 0; i < topics.length; i++) {
            text += topics[i] + " (" + seats[i] + ")\n";
        }
        alert(text);
    } else if (menu === "2") {
        let newTopic = prompt("Назва нового вебінару:");
        if (newTopic !== "" && newTopic !== null) {
            let newSeats = Number(prompt("Кількість місць:"));
            topics.push(newTopic);
            seats.push(newSeats);
            alert("Додано!");
        }
    } else if (menu === "3") {
        let num = Number(prompt("Номер вебінару:")) - 1;
        if (num >= 0 && num < topics.length) {
            let rename = prompt("Нова назва:");
            if (rename !== "" && rename !== null) {
                topics[num] = rename;
                alert("Змінено!");
            }
        }
    } else if (menu === "4") {
        let query = prompt("Що шукати?");
        let foundText = "";
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].includes(query)) {
                foundText += topics[i] + "\n";
            }
        }
        alert(foundText);
    } else if (menu === "5") {
        let del = confirm("Видалити останній?");
        if (del === true) {
            topics.pop();
            seats.pop();
            alert("Видалено!");
        }
    } else if (menu === "0") {
        let out = confirm("Точно вийти?");
        if (out === true) {
            menuExit = true;
        }
    }
} while (menuExit === false);


let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (day * month + name.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        } else if (scores[i] >= 50) {
            medium.push(scores[i]);
        } else {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

let addMore = true;
while (addMore === true) {
    let scoreInput = prompt("Введи бал (0-100):");
    if (scoreInput !== null && scoreInput !== "") {
        let sc = Number(scoreInput);
        if (sc >= 0 && sc <= 100) {
            requestScores.push(sc);
        }
    }
    addMore = confirm("Додати ще бал?");
}

let resultGroups = distributeRequests(requestScores);
alert("Твій бал: " + personalScore + "\nHigh: " + resultGroups[0].length + "\nMedium: " + resultGroups[1].length + "\nLow: " + resultGroups[2].length);

