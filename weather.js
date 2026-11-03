const weatherF = document.querySelector(".weatherform");
const cityin = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const api = "eb9366f793ae44e278129b61dda8c0bd";
weatherF.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityin.value;
    if (city) {
        try {
            const weatherd = await getw(city);
            displaywinfo(weatherd)

        }
        catch (error) {
            console.error(error)
            diserror(error)
        }
    }
    else {
        diserror("Please Enter a city")
    }
});
async function getw(city) {
    const apiu = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    const response = await fetch(apiu);
    if (!response.ok) {
        throw new Error("Could not Fetch weather data")
    }
    return await response.json();
}
function displaywinfo(data) {
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;
    card.textContent = "";
    card.style.display = "flex";
    const cityD = document.createElement("h1");
    const tempD = document.createElement("p");
    const humidD = document.createElement("p");
    const descD = document.createElement("p");
    const emojiD = document.createElement("p");

    cityD.textContent = city;
    tempD.textContent = `${temp}°C`;
    humidD.textContent = `humidity: ${humidity}%`;
    descD.textContent = description;
    emojiD.textContent = getwemoji(id);

    cityD.classList.add("cityD")
    tempD.classList.add("tempD");
    humidD.classList.add("humidD");
    descD.classList.add("descD");
    emojiD.classList.add("emojiD")

    card.appendChild(cityD);
    card.appendChild(tempD);
    card.appendChild(humidD);
    card.appendChild(descD);
    card.appendChild(emojiD)
}
function getwemoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "⛈️🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "😶‍🌫️😶‍🌫️";
        case (weatherId == 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "⁉️";
    }
}
function diserror(message) {
    const errord = document.createElement("p")
    errord.textContent = message;
    errord.classList.add("errorD");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errord);
}