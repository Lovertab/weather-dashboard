
// define the API URL
const apiKey = 'b6892b7b8290422c09663921c995d881';
function searchCity() {
const units = 'imperial';
const latApi = `http://api.openweathermap.org/geo/1.0/direct?q=New%20York&appid=${apiKey}`;
//const apiURL =`https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=${apiKey}&units=${units}`;
 
// make a get request    
fetch(latApi)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=${units}`;

    return fetch(apiURL);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayCity(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
};


// display City weather
function displayCity(data) {
  for (let i = 0; i < data.list.length; i += 8) {
    const day = data.list[i];
    console.log(day);
    const cityName = "New York";
    const date = day.dt_txt.split(' ')[0];
    const icon = day.weather[0].icon;
    const weatherIcon = `https://openweathermap.org/img/wn/${icon}.png`;
    const temperature = day.main.temp + "°F";
    const humidity = day.main.humidity;
    const windSpeed = day.wind.speed;
    const precipitation = '0%';

    const weatherDisplay = document.createElement("div");
    weatherDisplay.innerHTML = `
        <h2>${cityName}</h2>
        <p>Date: ${date}</p>
        <p>Weather: <img src="${weatherIcon}" alt="weather icon"> </p>
        <p>Temperature: ${temperature}</p>
        <p>Humidity: ${humidity}</p>
        <p>Wind Speed: ${windSpeed}</p>
        <p>Precipitation: ${precipitation}</p>
    `;
    document.body.appendChild(weatherDisplay);
  }
}