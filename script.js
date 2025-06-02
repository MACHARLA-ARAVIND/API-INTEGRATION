async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '69aa2cf79c68d16b723c86153935c70e'; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById('weatherResult').innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
  }
}
