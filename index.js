



// // const validNummer = Number("51");

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// //  Math.floor(num) - повертає найбільше ціле число, менше, або дорівнює вказаному

// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або дорівнює зазначеному числу.

// console.log(Math.ceil(1.2));


// // Math.round(num) - повертає значення числа, округлене до найближчого цілого

// console.log(Math.round(1.5, 2, 4, 5, 1, 6, 7)); // 2


// console.log(2 ** 4);


// console.log(Math.random() * (10 - 1) + 1);


// // const x = Number(prompt("Введіть перше число:"));
// // const y = Number(prompt("Введіть друге число:"));

// alert(x + " + " + y + " = " + (x * 22 + 222 / 3000000 + y + 2122 * 22 * 3000000));
// console.log(validNummer)


// const message = 'Mango ' + 'is' + ' happy';
// console.log(message)

// let result;


// result = 5 + '5';

// result = 5 + '5' + 5;

// console.log(result)

// const message = 'Welcome to Bahamas!';


// console.log(message.length);

// console.log(message.toLowerCase());


// console.log(message.toUpperCase());

// console.log(message.indexOf('to'));

// console.log(message.startsWith('Wel'));


// console.log(message.endsWith('!'));

// const name = 'Vorext AI';
// const age = 'nAn';
// const mood = 'noone';
// const message =
//     'My name is ' + name + ",I am " + age + ' years old and ' + mood + '.';
// console.log(message);

// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;


// let username = "Vova Iarovyi";

// console.log(username.indexOf("a"));

// let x = "Norman";

// let y = "Alex";

// let n = 1;

// let g = 11;

// console.log("Гість", x, y, "поселяється в", n, "номер", g);


// const message = prompt('Type your message. No copying or instant ban from the group!');
// console.log(message.trim());
// // Vorext AI 2025 Copyright;
// // No copying or instant ban from the group!


// const orderMsg = "Ви замовляєте 15 тістечок.";
// console.log(orderMsg.includes(15));
// console.log(orderMsg.indexOf('1'));
// // Vorext AI 2025 Copyright;
// // No copying or instant ban from the group!


// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';


// const string1 = 'Привіт, я Vortex AI, це не спам, пропоную тобі мільйон робаксів!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';
// // Vorext AI 2025 Copyright;
// // No copying or instant ban from the group!


// console.log(Boolean(false))

// let num = 20;
// const result = num > 10 && num < 30;
// console.log(result);

// /*
// * Логічне І (оператор &&)
// * - Запинається на брехні
// * - Повертає те на чому запнулось або останній операнд
// */


// console.log(1 && 4 && 7 && 'mango');


// /*
//  * Логічне АБО (оператор ||)
//  * - Запинаєтьс на правді
//  * - Повертає те на чому запнулось або останній операнд
//  */


// console.log("name" || "" || null || 0 || undefined);

// /*
//  * Логічне НІ (оператор !)
//  * Робить інверсію правда > брехня та брехня > правда
//  */


// console.log(!" ");

// let number = prompt("How much money you have?");

// if (number < 100) {
//     console.log("Welcome to the VorextAI+ Subscription!")
    
// }
// else {
// console.log("Not enough!")
// }

// if (number > 195) {
//     alert("Welcome to the VorextAI++ Subscription!")
//     console.log("Welcome to the VorextAI++ Subscription!")
// }

// let cost = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//     cost = 100;
// }

// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//     cost = 100;
// }

// else (subscription === 'free'); {
//     cost = 0
// }

// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//     cost = 0;
// } else if (subscription === 'pro') {
//     cost = 100;
// } else if (subscription === 'premium') {
//     cost = 500;
// } else {
//     console.log('Invalid subscription type');
// }


// let age = prompt("How old are you?")
// let type

// if (age < 18) {
//     alert("You are to young")
//     type = 'child'
// }

// else {
//     alert("You are old")
//     type = 'adult'
// }

// let name = prompt("What is the real name of Javascript?");

// if (name === "ESMAScript") {
//     console.log("You are right!")
// }

// else {
//     console.log("You are wrong!")
// }

let balance = 1000;
let withdrawal = parseFloat(prompt("Введіть суму для зняття: ")) || 0;

alert(`Ви хочете зняти ${withdrawal} гривень. Перевіряємо доступні кошти...`);

if (withdrawal > 0 && withdrawal <= balance) {
    balance -= withdrawal;
    alert(`Операція успішна! Ви зняли ${withdrawal} гривень. Залишок на рахунку: ${balance} Dollars.`);
} else if (withdrawal > balance) {
    alert("Недостатньо коштів на рахунку!");
} else {
    alert("Некоректна сума зняття!");
}

alert("Дякуємо, що скористалися банкоматом!");