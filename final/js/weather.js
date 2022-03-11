const API_KEY = "b8e12e9dbda64a1ea6890ced1039d229";

function onGeoOk(positon){
    const lat = positon.coords.latitude;
    const lon = positon.coords.longitude
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch 자스가 url을 실행
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            // console.log(weather);
            // console.log(city);

            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
    alert("Can`t find you! No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);