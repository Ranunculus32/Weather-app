// Feature #1
let now = new Date();
let dayNow = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

dayNow.innerHTML = `${day}, ${hour}: ${minutes}`;

//   Feature #2

function City(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  let searchInput = document.querySelector("#input-city").value;

  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  } else {
    h2.innerHTML = null;
    alert("Please type a city");
  }
}
let searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", City);
let apiKey = "667d9f573c8af4c33457be5d561a9148";
let city = document.querySelector("#input-city").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e1f87422ff7970d30225e93ee88e91f&units=metric`;
let icon= document.querySelector("#weather-icon");
let fahrenheit= document.querySelector("#celsiusTemp");
let celsius= document.querySelector("#fahTemp");
let humidity= document.querySelector("#humidityElement");
let wind= document.querySelector("#windElement");


function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let changeH1 = `Currently, ${city} has ${description} with a temperature of ${temperature} °C!`;
  let h1 = document.querySelector("#city");
  h1.innerHTML = changeH1;
}





axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

// Bonus Feature ------Not complete-----> refer to week 4 homework solution
//   function changetoFah(event) {
//     event.preventDefault();
//     let celsius = document.querySelector("#celsiusTemp");
//     let celsiusTemp = celsius.innerHTML;
//     celsiusTemp = Number(celsiusTemp);
//     let fahrenheit = document.querySelector("#fahTemp");
//     fahrenheit.innerHTML = Math.round((celsiusTemp * 9) / 5 + 32);
//   }

//   fahrenheit.addEventListener("click", changetoFah);

