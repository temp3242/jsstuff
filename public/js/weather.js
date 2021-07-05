function getWeather() {
    fetch("/api/weather").then(res => {
        res.json().then(response => {
            console.log(response.main)

            document.getElementById("temp").innerHTML = `${response.main.temp}°C`
            document.getElementById("feel").innerHTML = `${response.main.feels_like}°C`
            document.getElementById("humi").innerHTML = `${response.main.humidity}%`
            document.getElementById("press").innerHTML = `${response.main.pressure}hPa`
        })
    })
}

getWeather()

setInterval(function(){ getWeather() }, 60000 * 15);