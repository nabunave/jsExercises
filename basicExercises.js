// let myName = "mariano"
// console.log(myName);

// let myLastName = "perez"
// console.log(myLastName);

// let myAge = 25
// console.log(myAge);

// let myPet = "samuel"
// console.log(myPet);

// let myPetAge = 3
// console.log(myPetAge);

// let fullName = `${myName} ${myLastName}`
// console.log(fullName);

// let presentationText = `Hola, me llamo ${fullName} y tengo ${myAge} años. Mi mascota se llama ${myPet} y tiene ${myPetAge} años.`
// console.log(presentationText);

//DIFFICULTY MEDIUM

// let sumAges = myAge + myPetAge
// console.log(sumAges);

// let subtractAges = myAge - myPetAge
// console.log(subtractAges);

// let productAges = myAge * myPetAge
// console.log(productAges);

// let divisionAges = myAge / myPetAge
// console.log(divisionAges);

let student = {
    name: "juan",
    lastName: "perez",
    age: 25,
    pet: "samuel",
    petAge: 3
}
console.table(student);
console.log(student);

let pet = {
    name: "samuel",
    type: "dog",
    age: 3,
    breed: "labrador",
    color: "white"
}

console.table(pet);
console.log(pet.name);
console.log(pet.type);
console.log(pet.age);
console.log(pet.breed);
console.log(pet.color);
console.log(pet);//todo el objeto

let fruits = ["apple", "banana", "orange", "pineapple", "grape"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Difficulty Level: High

// let age = prompt ("Enter your age")

// if (age >= 18) {
//     console.log("I am an adult")
// } else {
//     console.log("I am not an adult")
// }

let numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

let family = ["Jackson", "Jordi", "Flores", "Wayne", "Perez"]
for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}

let randomText = `${fruits[1]} ${numbers[3]} ${family[0]}`
console.log(randomText);

