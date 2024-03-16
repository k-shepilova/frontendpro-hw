const wrapper = document.querySelector('#weatherInfo');
const cityInput = document.querySelector('#cityInput');
const weatherBtn = document.querySelector('#weatherBtn');

function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    element.className = className;
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    return element;
}

function getWeather(city) {
    if (!city) {
        wrapper.innerHTML = 'Please enter a city name.';
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    wrapper.innerHTML = 'Loading weather data...';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid request or city not found.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            wrapper.innerHTML = '';
            const colRight = createElement('div', 'col-right', '');
            const colLeft = createElement('div', 'col-left', '');

            const elements = [
                createElement('div', 'city', `${data.name}`),
                createElement('div', 'temp', `Temperature: ${Math.round(data.main.temp)}° Celsius`),
                createElement('div', 'pressure', `Pressure: ${data.main.pressure} hPa`),
                createElement('div', 'description', `${data.weather[0].description}`),
                createElement('div', 'humidity', `Humidity: ${data.main.humidity}%`),
                createElement('div', 'speed', `Wind speed: ${data.wind.speed} meter/sec`),
                createElement('div', 'deg', `${data.wind.deg} meteorological degrees`),
            ];

            elements.forEach(element => colRight.appendChild(element));

            const icon = createElement('div', 'icon', `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather in ${data.name}">`);
            colLeft.appendChild(icon);

            wrapper.appendChild(colLeft);
            wrapper.appendChild(colRight);
        })
        .catch(error => {
            wrapper.innerText = error.message;
        });
}

getWeather("KREMENCHUK");

weatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    getWeather(city);
});
