const apiKey = "d25e2a1f4b264a6570c2a4c632de28eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const locationInput = document.querySelector("#locInput");
const searchButton = document.querySelector("#searchBtn");
const container = document.querySelector(".weather-container");
const weatherIcon = container.querySelector("#weatherIcon")
const temperature = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humid");
const wind = document.getElementById("wind");


function fetchWeather(locationInput){
    const url = apiUrl + locationInput + `&appid=${apiKey}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            if(data.cod == "404"){
                weatherIcon.src = "/assets/exclamation-mark.png";
                weatherIcon.style.margin = "30px";
                const info =  document.querySelector("#city");
                const infoTemp = document.querySelector("#temp");
                infoTemp.innerText = "";
                info.innerText = "City Not Found";
                info.style.fontSize = "30px";
                info.style.padding = "40px";
                
                return;
            }

            console.log(data);
            city.innerText = data.name;
            temperature.innerText= Math.round(data.main.temp) + "°C";
            humidity.innerText = data.main.humidity +"%";
            wind.innerText = data.wind.speed + "km/h";

            if(data.weather[0].main === "Clear"){
                weatherIcon.src = "/assets/clear.png";
            }
            
            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "/assets/clouds.png";
            }
        
            else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "/assets/drizzle.png";
            }
        
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "/assets/mist.png";
            }
        
            else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "/assets/rain.png";
            }
        
            else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "/assets/snow.png";
            }

        })
           
}

searchButton.addEventListener("click",
    (event) =>{
        event.preventDefault();
        fetchWeather(locationInput.value);
    }
)