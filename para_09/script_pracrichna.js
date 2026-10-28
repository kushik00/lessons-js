let games = [
    { id: 1, title: "The Witcher 3", genre: "RPG", price: 799, rating: 10, available: true },
    { id: 2, title: "Cyberpunk 2077", genre: "Action RPG", price: 999, rating: 8, available: true },
    { id: 3, title: "Minecraft", genre: "Sandbox", price: 600, rating: 9, available: true },
    { id: 4, title: "Hades", genre: "Roguelike", price: 450, rating: 9.5, available: true },
    { id: 5, title: "Counter-Strike 2", genre: "Shooter", price: 0, rating: 7, available: false },
    { id: 6, title: "Stardew Valley", genre: "Simulation", price: 350, rating: 9, available: true }
];

for (let game of games) {
    console.log(game);
}

console.log(games.length);

let title = prompt("Введіть назву:");
let genre = prompt("Введіть жанр:");
let price = Number(prompt("Введіть ціну:"));
let rating = Number(prompt("Введіть рейтинг:"));

let newGame = {
    id: games.length + 1,
    title: title,
    genre: genre,
    price: price,
    rating: rating,
    available: true
};
games.push(newGame);

let isDelete = confirm("Видалити останню гру?");
if (isDelete) {
    games.pop();
}

let search = prompt("Яку гру шукаємо?");
let foundGame = games.find(game => game.title === search);
if (foundGame) {
    console.log(foundGame);
} else {
    console.log("Нічого не знайдено");
}

let userPrice = Number(prompt("Введіть макс ціну:"));
let cheapGames = games.filter(game => game.price <= userPrice);
console.log(cheapGames);

let topGames = games.filter(game => game.rating >= 8);
console.log(topGames);

let titles = games.map(game => game.title);
console.log(titles);

let saleGames = games.map(game => {
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: game.price * 0.85,
        rating: game.rating,
        available: game.available
    };
});
console.log(saleGames);

games.sort((a, b) => a.price - b.price);
console.log(games);

const myName = "Лада";
let letters = myName.length;
let budget = letters * 100;

let availableGames = games.filter(game => game.available === true);
let totalCost = 0;

for (let game of availableGames) {
    totalCost = totalCost + game.price;
}

console.log(totalCost);

if (totalCost > budget) {
    alert("Перевищує бюджет!");
} else {
    let balance = budget - totalCost;
    alert("Залишок: " + balance);
}
