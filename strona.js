// const isAsmin = true;
// const isLogged = true;
// const isMod = true;

// if(isAdmin === true && isLogged === true) {
//     console.log("Zalogowano jako admin")
// }
// else if (isAsmin === false && isLogged === true) {
//     console.log("Zwykły użytkownik")
// }
// // if(isAdmin || isMod)
// if(isAsmin === true || isMod === true) {
//     console.log("Witaj")
// }

// const date = new Date();
// console.log(date.getHours())

const greetIng = document.getElementById("godzina");
const date = new Date();
const godzina = date.getHours()

if(godzina >= 6 && godzina < 12) {
    greetIng.textContent = "Good Morning"
}
else if (godzina >= 12 && godzina < 18) {
    greetIng.textContent = "Good Afternoon"
}
else if (godzina >= 18) {
    greetIng.textContent = "Good Evening"
}

let num2 = 23

num2 > 20 ? console.log("Zgadza się") : console.log("Nie zgadzza się")
// "?" zapytanie "jeśli tak?"
