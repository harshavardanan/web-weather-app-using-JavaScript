const input = document.getElementById("searchBar");
const title = document.getElementById("title");
const status = document.getElementById("status");
const icon = document.getElementById("weathericon");
const temp = document.getElementById("temperature");
const cityName = document.getElementsByClassName("city")[0]; // Use the first element
const minTemp = document.getElementById("min");
const maxTemp = document.getElementById("max");
const dateTime = document.getElementsByClassName("dateTime")[0]; // Use the first element
const realFeel = document.getElementById("realfeel");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const fetchApi = (event) => {
  event.preventDefault(); // Prevent the default form submission

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=7f3376673b0c42feffdf9b1d57f8047d&units=metric`;

  fetch(weatherUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found"); // Handle city not found
      }
      return response.json();
    })
    .then((data) => {
      cityName.innerText = data.name;
      status.innerText = data.weather[0].description;
      const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      icon.setAttribute("src", iconUrl);

      var celsius = Math.round(data.main.temp) + "°C";
      var fahrenheit = Math.round((data.main.temp * 9) / 5 + 32) + "°F";
      temp.innerText = celsius;
      minTemp.innerText = `Min: ${data.main.temp_min}`;
      maxTemp.innerText = `Max: ${data.main.temp_max}`;
      realFeel.innerText = data.main.feels_like;
      humidity.innerText = data.main.humidity;
      pressure.innerText = data.main.pressure;
      wind.innerText = data.wind.speed;

      temp.addEventListener("mouseover", function () {
        temp.innerText = fahrenheit;
      });
      temp.addEventListener("mouseout", function () {
        temp.innerText = celsius;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("City not found, please try again."); // Notify user
    });

  console.log(weatherUrl); // Debugging purpose
};
