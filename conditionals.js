// let num1 = 4
// let num2 = 5

// if (num1 > num2) {
//     console.log(num1)
// } else if (num1 < num2) {
//     console.log(num2)
// } else {
//     console.log(`${num1} is equal to ${num2}`);
// }

// if (num1 === num2) {
//     console.log("the numbers are equal");
// } console.log("the numbers are not equal");

// let date1 = "2018-9-2"
// let date2 = "2023-7-5"

// if (date1 > date2) {
//     console.log(`The date ${date1} is greater than ${date2}`)
// } else if (date1 < date2) {
//     console.log(`The date ${date1} is less than ${date2}`)
// } else {
//     console.log(`Las fechas son iguales`)
// }

// let number1 = 5
// let number2 = 7
// let number3 = 9

// let mayor = Math.max(number1, number2, number3)
// console.log(`the highest number is ${mayor}`)

// let color = prompt("Enter a color")

// switch (color) {
//     case "red":
//         console.log("The color is red");
//         break;
//     case "blue":
//         console.log("The color is blue");
//         break;
//     case "green":
//         console.log("The color is green");
//         break;
//     default:
//         console.log("The color is not red, blue or green");
// }

// let userNumber = parseInt(prompt("Enter a number"))
// let userNumber2 = parseInt(prompt("Enter another number"))
// let operation = prompt("Enter an operation")
// if (userNumber < 1 || userNumber > 100 || userNumber2 < 1 || userNumber2 > 100) {
//     console.log("Enter a number between 1 and 100")
// } else {
//     switch (operation) {
//         case "sum":
//             console.log(`The sum is equal to ${userNumber + userNumber2}`);
//             break;
//         case "subtraction":
//             console.log(`The subtraction is equal to ${userNumber - userNumber2}`);
//             break;
//         case "multiply":
//             console.log(`The multiplication is equal to ${userNumber * userNumber2}`);
//             break;
//         case "division":
//             console.log(`The division is equal to ${userNumber / userNumber2}`);
//             break;
//     }
// }

// let person1 = {
//     name: "juan",
//     age: 45,
//     height: 1.95
// }

// let person2 = {
//     name: "pedro",
//     age: 40,
//     height: 1.90
// }

// if (person1.height > person2.height && person1.age > person2.age) {
//     console.log(`${person1.name} is more tall and older than ${person2.name}`)

// } else if (person1.height > person2.height && person1.age < person2.age) {
//     console.log(`${person1.name} is more tall and younger than ${person2.name}`)

// } else if (person1.height < person2.height && person1.age > person2.age) {
//     console.log(`${person2.name} is more tall and older than ${person1.name}`)
// } else {
//     console.log(`${person2.name} es mas alto y mayor que ${person1.name}`)
// }

// let persona = {
//     name: prompt("Ingresa tu nombre"),
//     age: parseInt(prompt("Ingresa tu edad")),
//     height: parseInt(prompt("Ingresa tu altura")),
//     vision: parseInt(prompt("Ingresa tu vision"))
// }

// if (persona.age >= 18 && persona.height >= 110 && persona.vision >= 8) {
//     console.log("Apto para conducir")
// } else {
//     console.log("No es apto para conducir")
// }

// let age = parseInt(prompt("Ingresa tu edad"))
// if (age <= 12) {    
//     alert("Eres un niño")
// } else if (age >= 13 && age <= 18) {
//     alert("Eres un adolescente")
// } else if (age >= 19 && age <= 45) {
//     alert("Eres un joven")
// } else if (age >= 46 && age <= 100) {
//     alert("Eres mayor")
// } else if (age > 100) {
//     alert("Eres muy viejo")
// }

let number = parseInt(prompt("Enter a number between 1 and 3"))
let number2 = parseInt(prompt("Enter a number"))

if (number == 1) {
    alert(`The number is ${number2}`)
} else if (number == 2) {
    alert(`The number is ${number2 * 2}`)
} else if (number == 3) {
    alert(`The number is ${number2 * 3}`)
} else {
    alert("The number is not between 1 and 3")
}

// let userName
// let pass
// let entry
// let buy
// let money
// let useTicket

// userName = prompt("Enter your name")
// if (userName === "mariano") {
//     alert("Welcome");
// } else {
//     pass = confirm("Enter if you are vip or not");
//     if (pass) {
//         alert("Welcome");
//     } else {
//         entry = confirm("Do you have ticket?");
//         if (entry) {
//             useTicket = confirm("Do you want to use a ticket?");
//             if (useTicket) {
//                 alert("Welcome");
//             } else {
//                 alert("Bye");
//             }
//         } else {
//             buy = confirm("Want to buy a ticket?");
//             if (buy) {
//                 money = prompt("Enter your money");
//                 if (money >= 1000) {
//                     alert("Welcome! Thanks for your purchase");
//                 } else {
//                     alert("Not enough money, bye bye.");
//                 }
//             } else {
//                 alert("Bye");
//             }
//         }
//     }
// }
