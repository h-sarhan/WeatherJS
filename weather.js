// Creating the weather class
class Weather {
	constructor(city) {
		this.city = city;
		this.apiKey = "abae64df06242e83938d6e36efd8b60f";
	}

	getStats() {
		let apiRes = fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
				this.apiKey
			}`
		);
		apiRes.then(res => {
			let weatherData = res.json();
			weatherData
				.then(data => {
					console.log(data);
					let a = [];
					a.push(this.city);
					a.push(data.weather[0].main);
					a.push(data.main.temp - 273);
					a.push(data.weather[0].icon);
					a.push(data.main.humidity);
					a.push(data.wind.speed);
					return a;
				})
				.catch(err => {
					showError(err);
				});
		});
	}
}
