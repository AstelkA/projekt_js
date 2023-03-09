const KEY = "912c622485ebcccfe6e75ebb3dc2de10"
// "b472fbee3b11df82024e1906b455c8bc" zmienic na ten key  

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const searchField = document.getElementById("cityName")
const searchBtn = document.getElementById("search")
const errorMsg = document.getElementById("errorMsg")

searchBtn.addEventListener("click", ()=>{
    getWeather(searchField.value);
})

const getWeather = async (query = "Katowice") => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}`)
    // const data = await res.json();
    // // console.log(data);
    // weatherInfo(data);
    if(res.status === 200) {
        const data = await res.json();
        weatherInfo(data);
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "!!! NIE ZNALEZIONO MIASTA !!!";
    }
}


const weatherInfo = (data) => {
    console.log(data);
    const city = document.getElementById("weatherCity");
    city.textContent = data.name;
    const sky = document.getElementById("zachmurzenie");
    sky.textContent = "Zachmurzenie: " + data.clouds.all + "%";
    const temp = document.getElementById("temp")
    temp.textContent = "Temperatura teraz: " + convertToCel(data.main.temp) + "˚C";
    const wind = document.getElementById("wiatr");
    wind.textContent = "Wiatr (prędkość): " + data.wind.speed + "km/h";
    const visib = document.getElementById("przejrzystosc");
    visib.textContent = "Przejrzystość: " + (data.visibility / 100) + "% / 10km";
    const humi = document.getElementById("hum")
    humi.textContent = "Wilgotność: " + data.main.humidity + "%";
    const press = document.getElementById("press");
    press.textContent = "Cieśnienie: " + data.main.pressure + "hPa";
}

const convertToCel = (value) => {
    return (value - 273.15).toFixed()
}


getWeather();





































// umożliwia pobieranie danych/asynchroniczność 
// (ciągłe ładowanie/wczytywanie)
// fetch()
// funckja asynchroniczna

// fetch("https://swapi.dev/api/people")
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(er => console.lor(er)) lub

// const getData = async () => {
//     const response = await fetch ("https://swapi.dev/api/people");
//     const data = await response.json();
//     // console.log(data.results);
//     data.results.forEach((item) => createCard(item))
// };

// // funckja asynchroniczna została odsunieta na bok, 
// // następnie zmienna gdzie ma wpaść wynik fetch 
// // "await" ma za zadanie czekania aż poprzednia część zostanie wykonana.
// getData();

// const createCard = (person) => {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = person.name;
//     document.body.appendChild(paragraph);
// }