// Typy złożone: TABLICE i OBIEKTY

// const users = ["Tom", "Jhin", "Ana"]

// console.log(users)

// new to dziedziczenie prototypowe
// x to będzie każdy jeden element z łańcucha Array
// const filteredUsers = users.filter((x) => ...users.funkcja())

// MAP zwraca nową tablicę, nie zmienia oryginału
// const mapUser = users.map((item) => item.toUpperCase());

// console.log(mapUser)

// FOR EACH (nic nie zwraca"undefined" oraz nie zmienia oryginału)

// const forEachUsers = users.forEach((user) => user.toLowerCase)

// const users = ["Tom", "Jhin", "Ana", "Kiriko"];
// const mapUser = users.map((name) => "To jest " + name);
// console.log(mapUser)

// const filteredUsers = users.filter((name) => name.includes("i"));
// console.log(filteredUsers);

// users.forEach((name) => console.log(name))

// tablica tablic
// const multiArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(multiArr[2][1])

// tablica obiektów

// const obj = {
//     // klucz: wartość
//     firstname: "Tom",
//     lastname: "Gida",
//     age: 20,
//     city: "Londyn",
//     info () {
//         console.log("To jest user")
//     }
// }

// console.log(obj);
// console.log(obj.firstname);

// obj.info()
 // {} uywane jako znacznik obiektu

// const users = [
//     {
//         id: 12,
//         firstname: "Jhin",
//         city: "Londyn"
//     },
//     {
//         id: 14,
//         firstname: "Ana",
//         city: "Bielsko"
//     },
//     {
//         id: 17,
//         firstname: "Tom",
//         city: "Skocz"
//     }
// ]

// const createUser = (user) => {
//     console.log(user);
//     const card = document.createElement("div");
//     card.innerHTML =
//     `
//     <h3>${user.firstname} - ${user.id}</h3>
//     <span>${user.city}</span>
//     `
//     document.body.appendChild(card);
// }
// // 
// users.forEach((user) => createUser(user))