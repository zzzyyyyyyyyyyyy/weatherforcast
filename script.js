const citySelect = document.getElementById("citySelect");
const forecastButton = document.getElementById("forecastButton");
const forecastResults = document.getElementById("forecastResults");
const weatherInfo = document.getElementById("weatherInfo");

forecastButton.addEventListener("click", () => {
    const selectedCity = citySelect.value;
    let weatherForecast = "";
    let animationClass = "";

    switch (selectedCity) {
        case "ahmedabad":
        case "mumbai":
            weatherForecast = "Light Rain";
            break;
        case "hyderabad":
        case "kolkata":
            weatherForecast = "Sunny Day";
            break;
        case "delhi":
        case "goa":
            weatherForecast = "thunder storm";
            break;
        case "jaipur":
        case "bengular":
            weatherForecast = "Heavy Rain";
            break;
    }

    forecastResults.innerHTML = `<p>Weather Forecast: ${weatherForecast}</p>`;
    
    if (animationClass) {
        weatherInfo.innerHTML = `<div class="weather-animation ${animationClass}"></div>`;
    } else {
        weatherInfo.innerHTML = "";
    }
});
