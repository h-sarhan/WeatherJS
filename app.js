const cityName = document.getElementById("city");
const changeLocation = document.getElementById("submit");
const defaultCity = "London";

let weather = new Weather(defaultCity);
weather.getStats();

function showError() {
	let err = document.getElementById("error");
	err.className = "alert alert-danger";
	err.textContent = "City not found";
	setTimeout(() => {
		err.className = "alert alert-danger d-none";
	}, 3000);
}

changeLocation.addEventListener("click", () => {
	if (cityName.value != "") {
		weather = new Weather(cityName.value);
		weather.getStats();
	}
});
