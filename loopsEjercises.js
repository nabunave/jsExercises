// const setupTable = (numPeople) => {
//     let table = new Array(numPeople);

//     for (let i = 0; i < numPeople; i++) {
//         table[i] = {
//             plate: "center",
//             fork: "left",
//             knife: "right",
//             glass: "front"
//         };
//     }

//     return table;
// }

// let tableFor15 = setupTable(15);
// console.log("Table for 15 people:", tableFor15);

// let tableFor50 = setupTable(50);
// console.log("Table for 50 people:", tableFor50);

// //3

// for (let i = 10; i <= 20; i++) {
//     console.log("Current number: " + i);
//    }

//6

// let number = parseInt(prompt("Enter a number"));

// for (let i = number; i >= 0; i--) {
//     console.log(i);
// }

//7
// let number
// do {
//     number = parseInt(prompt("Enter a number"));
// } while (number < 1 || number >= 10)

// for (let i = 1; i < 11; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

//8
// let number = parseInt(prompt("Enter a number"));
// let numAccumulator = 0;

// while (number > 0) {
//     numAccumulator += number;
//     number = parseInt(prompt("Enter a number"));
// }

// console.log(numAccumulator);

//9
// let number
// let numAccumulator = 0
// do {
//     number = parseInt(prompt("Enter a number"));
//     if (number > 0) {
//         numAccumulator += number
//     }
// } while (number > 0)
// console.log(numAccumulator);

//10

// let person = {
//     name: "Juan",
//     lastName: "Perez",
//     origin: "Colombia",
//     studies: "Computer Science"
// }
// for (let key in person) {
//     console.log(key);
// }

// //11

// for (let key in person) {
//     console.log(person[key]);
// }

// Medium
//1

// let secretNumber = 27
// let enterNumber = 0
// let attempts = 0

// while (enterNumber !== secretNumber) {
//     enterNumber = parseInt(prompt("Enter a number"))
//     if (enterNumber > secretNumber) {
//         alert("the number entered is greater than the secret");
//         attempts++
//     } else if (enterNumber < secretNumber) {
//         alert("the number entered is less than the secret");
//         attempts++
//     } else {
//         alert(`You got it right! The secret number was ${secretNumber} and you made ${attempts} attempts`);
//     }
// }

//2

// let number = parseInt(prompt("Enter a number"));

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         console.log(i);
//     }
// }

//3

// ringBell = (number) => {
//     let ringing = "Ding Dong"
//     for (let i = 1; i < number; i++) {
//         ringing += " Ding Dong"
//     }
//     console.log(ringing);
// }

// let ringNumbers = parseInt(prompt("Enter a number"));
// ringBell(ringNumbers);

// //4
// const dateLimit = "1997-8-3"
// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (let i = 0; i < dates.length; i++) {
//     if (dates[i] > dateLimit) {
//         console.log(dates[i]);
//     }
// }

//5
// let arrayColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white"];

// for (const color of arrayColors) {
//     console.log(color);
// }

//6

// colorFunction = (arrayColors) => {
//     for (const color of arrayColors) {
//         console.log(color);
//     }
// }
// colorFunction(arrayColors)

//7
// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of arrayNumbers) {
//     console.log(`the number is ${number} and its double is ${number * 2}`);
// }

//8

// let family = []
// let person = [
//     { name: "John", lastName: "Lennon", age: 34, member: "father" },
//     { name: "Paul", lastName: "McCartney", age: 37, member: "brother" },
//     { name: "George", lastName: "Harrison", age: 60, member: "grandfather" },
//     { name: "Ringo", lastName: "Starr", age: 31, member: "brother" },
// ]
// showFamily = (family) => {
//     for (let i = 0; i < family.length; i++) {
//         console.log(`Hello, I am ${family[i].name} ${family[i].lastName} (${family[i].member}) and I am ${family[i].age} years old.`)
//     }
// }
// showFamily(person)

// High
//1

let num1, num2, sum

do {
    num1 = parseInt(prompt("Enter a number"));
    if (num1 !== 0) {
        num2 = parseInt(prompt("Enter another number"));
        if (num2 !== 0) {
            sum = num1 + num2;
            if (sum % 2 === 0) {
                console.log(`Even numbers: ${sum}`);
            } else {
                console.log(`Odd numbers: ${sum}`);
            }
        } else {
            console.log("The second number must be different from 0");
        }
    } else {
        console.log("The first number must be different from 0");
    }
} while (num1 !== 0 && num2 !== 0 && sum % 3 === 0 && sum % 2 === 0);

//2

// let arrayTenNumbers = []
// let largest = 0

// for (let i = 0; i < 10; i++) {
//     arrayTenNumbers[i] = Math.floor(Math.random() * 100);
// }

// console.log(arrayTenNumbers);

// for (let i = 0; i < arrayTenNumbers.length; i++) {
//     if (arrayTenNumbers[i] > largest) {
//         largest = arrayTenNumbers[i];
//     }
// }
// alert(largest);



