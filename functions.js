// const add = (number1, number2) => {
//   let result = number1 * number2;
//   return result;
// }

// console.log(add(100, 20));

//transformo a anonima:

// const add = ((number1, number2) => {
//   let result = number1 * number2
//   return result
// })(100, 20)

// console.log(add)

// const greet = (name) => console.log(`Hola ${name}`)

// greet("Mariano")

// const multiplicar = (nro1, nro2) => {
//   let resultado = nro1 * nro2
//   return resultado
// }

// console.log(multiplicar(2, 8))

// const area = (num1, num2) => {
//   let resultado = (num1 * num2) / 2
//   return resultado
// }
// console.log(area(10, 5));

// const perimetro = (nume1, nume2, nume3) => {
//   let resultado = nume1 + nume2 + nume3
//   return resultado
// }
// console.log(perimetro(2, 3, 4));

// const product = (price, quantity) => {
//   let result
//   if (quantity >= 10 && quantity < 20) {
//     result = quantity * price * 0.9
//   } else if (quantity >= 20) {
//     result = quantity * price * 0.8
//   } else {
//     result = price * quantity
//   }
//   return result
// }

// console.log(product(1, 20));

// const isAnAdult = (age) => {
//   if (age >= 18) {
//     return "You are an adult"
//   } else {
//     return "You are not an adult"
//   }
// }

// console.log(isAnAdult(27))

// // Difficulty Level: High

// const calculateTax = (income) => {
//   if (income < 10000) {
//     return income * 0.1
//   } else if (income < 20000) {
//     return income * 0.15
//   } else {
//     return income * 0.2
//   }
// }
// console.log(calculateTax(60500))

const businessDay = (day) => {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "It is a business day."
    case 6:
    case 7:
      return "It's the weekend."
    default:
      return "Invalid day."
  }
}
console.log(businessDay(2))

const personalInfo = (name, lastName, age) => {
  if (name === "") {
    alert("The name cannot be empty")
    return
  }
  if (lastName === "") {
    alert("The last name cannot be empty")
    return
  }
  if (age === "") {
    alert("The age cannot be empty")
    return
  }
  const person = {
    name: name,
    lastName: lastName,
    age: age
  }
  console.log(person)
}

personalInfo(prompt("Enter your name"), prompt("Enter your last name"), prompt("Enter your age"))

const greet = (name) => `Hello, my name is ${name}`

const calculateAge = (birthYear, currentYear) => currentYear - birthYear

const present = (name, birthYear, currentYear) => {
  const age = calculateAge(birthYear, currentYear)
  return `Hello, my name is ${name} and I am ${age} years old.`
}

alert(present(prompt("Enter your name"), prompt("Enter your birth year"), prompt("Enter the current year")))


