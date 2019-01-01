// Creating the weather class
class Weather {
	constructor(city) {
		this.city = city;
		this.data = [];
		this.apiKey = "abae64df06242e83938d6e36efd8b60f";
	}

	updateStats() {
		let apiRes = fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
				this.apiKey
			}`
		);
		apiRes.then(res => {
			let weatherData = res.json();
			weatherData
				.then(data => {
					this.data.push(this.city);
					this.data.push(data.weather[0].main);
					this.data.push(data.main.temp - 273);
					this.data.push(data.weather[0].icon);
					this.data.push(data.main.humidity);
					this.data.push(data.wind.speed);
					console.log(this.data);
				})
				.then(() => {
					let a = this.data;
					city.textContent = a[0];
					status.textContent = a[1];
					degrees.textContent = `${Math.round(a[2])} C`;
					icon.setAttribute(
						"src",
						`http://openweathermap.org/img/w/${a[3]}.png`
					);
					humidity.textContent = `Relative Humidity: ${a[4]}%`;
					windSpeed.textContent = `Wind Speed: ${a[5]}m/s`;
				})
				.catch(err => {
					console.log(err);
					showError(err);
				});
		});
	}
}
