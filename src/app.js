function formatDate(timestamp) {
    let now = new Date(timestamp);
    let todayDate = now.getDate();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let todayMonth = months[now.getMonth()];
    
    let weeks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let todayWeek = weeks[now.getDay()];
    
    let nowHour = now.getHours();
    if (nowHour < 10) {
      nowHour = "0" + nowHour;
    }
    console.log(now);
    let nowMinutes = now.getMinutes();
    if (nowMinutes < 10) {
      nowMinutes = "0" + nowMinutes;
    }
    return `${todayDate} ${todayMonth}, ${todayWeek}, ${nowHour}:${nowMinutes}`
    }
    
    function searchCity(event) {
      event.preventDefault();
    let inCity = document.querySelector("#city-search-input");
      let h1 = document.querySelector("h1");
      h1.innerHTML = `${inCity.value}`;
      
      let apiKey = "e1d0516b1e815834edf6f152fc57e191";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inCity.value}&appid=e1d0516b1e815834edf6f152fc57e191&units=metric`;
    axios.get(`${apiUrl}`).then(showTemperature);
      }
    
    let form = document.querySelector("#cityInput");
    form.addEventListener("submit", searchCity);
    
      function showLocationTemperature (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude);
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e1d0516b1e815834edf6f152fc57e191&units=metric`;
      axios.get(apiUrl).then(showTemperature);
      }
    
      function showPosition() {
        navigator.geolocation.getCurrentPosition(showLocationTemperature);
      }
    
    let button = document.querySelector("#cur");
    button.addEventListener("click", showPosition);
    
    function showTemperature (response) {
      let curDate = document.querySelector("#date");
      curDate.innerHTML = formatDate(response.data.dt * 1000);
      console.log(response.data.dt * 1000)
      let temperature = document.querySelector("#temp");
      let currentTemp = Math.round(response.data.main.temp);
      temperature.innerHTML = currentTemp;
    
      let humidity = document.querySelector("#humidity");
      let currentHumidity = Math.round(response.data.main.humidity);
      humidity.innerHTML = currentHumidity;
    
      let wind = document.querySelector("#wind");
      let currentWind = Math.round(response.data.wind.speed);
      wind.innerHTML = currentWind;
    
      let h1 = document.querySelector("h1");
      h1.innerHTML = response.data.name;
    
      let weth = document.querySelector("#weth");
      weth.innerHTML = response.data.weather[0].main;

      let iconElement = document.querySelector("#icon");699086
      iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute(
      "alt", response.data.weather[0].description);
  
    }