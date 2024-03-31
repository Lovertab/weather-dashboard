console.log("hello world");

// define the API URL
const apiURL ='https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
const apiKey = 'b6892b7b8290422c09663921c995d881';

// make a get request
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createWeatherDashboard(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

// display City weather
function displayCity(data) {
    const cityName = "New York";
    const date = "03/31/2024";
    const weatherIcon = ['🌧️', '🌞', '⛈️', '🌦️', '⛅️', '🌤️', '🌥️', '☁️'];
    const temperature = "60°F";
    const humidity ='37%'
    const windSpeed = '11mph';
    const precipitation = '0%';
    
    const weatherDisplay = document.createElement("div");
    weatherDisplay.innerHTML = `
        <h2>${cityName}</h2>
        <p>Date: ${date}</p>
        <p>Weather: ${weatherIcon}</p>
        <p>Temperature: ${temperature}</p>
        <p>Humidity: ${humidity}</p>
        <p>Wind Speed: ${windSpeed}</p>
        <p>Precipitation: ${precipitation}</p>
    `;
    
    document.body.appendChild(weatherDisplay);
}