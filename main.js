const apiKey = "56a2b3ab141e0e39980f9410f3e4ef80";

const weatherDataElement = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-name")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
    event.preventDefault ();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response = await fetch (`https://api.openweathermap.org/data/3.0/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    } catch (error) {
        
    }
}