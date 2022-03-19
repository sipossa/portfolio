const API_KEY ="00e4ce2599f9961ad438463e592b27ed"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // console.log("You live it",lat,lng)
  const url =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText= data.name
    weather.innerText=`${data.weather[0].main}`
  });

}

function onGeoError() {
alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);