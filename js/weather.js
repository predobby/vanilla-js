
const API_KEY = "975e413b1b117b198fdf3dd269b84eed";

function onGeoSuccess (position){
    const lat= position.coords.latitude;  //coords는 좌표이고, latitude는 위도, longitude는 경도이다.
    const lng= position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`; //"",''이 아닌 `` 백틱을 사용해야 한다.
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            const city = document.querySelector("#city");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
    }

function onGeoError () {
    alert("Can't find you. No weaher for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);