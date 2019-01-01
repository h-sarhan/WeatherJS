const cityName = document.getElementById("newCity");
const changeLocation = document.getElementById("submit");
const city = document.getElementById("city");
const status = document.getElementById("weatherStatus");
const degrees = document.getElementById("degrees");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const icon = document.getElementById("icon");
const defaultCity = "London";

let weather = new Weather(defaultCity);
weather.updateStats();
changeCity(defaultCity);

function showError() {
	let err = document.getElementById("error");
	err.className = "alert alert-danger";
	err.textContent = "City not found";
	setTimeout(() => {
		err.className = "alert alert-danger d-none";
	}, 3000);
}

changeLocation.addEventListener("click", changeCity);

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeCity() {
	if (cityName.value != "") {
		weather = new Weather(capitalizeFirstLetter(cityName.value));

		weather.updateStats();
	}
}
