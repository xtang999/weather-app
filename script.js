async function getWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8a3ba5487b77443dbaa44807231211&q=${city}&days=7`);
    const data = await response.json();
    console.log(data);
    return data;
} 

async function updateWeatherForCity(city) {
    try {
        const weatherData = await getWeather(city);

        if (weatherData && weatherData.location && weatherData.current && weatherData.forecast) {
            const main = getMainElement();
            main.innerHTML = '';
            createWeatherCard(weatherData);
            createForecastGroup(weatherData);
        } else {
            if (city !== 'Melbourne') {
                updateWeatherForCity('Melbourne');
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        if (city !== 'Melbourne') {
            updateWeatherForCity('Melbourne');
        }
    }
}


function addCityEditListener() {
    const cityDiv = document.querySelector('.weather-location');

    cityDiv.addEventListener('blur', function() {
        updateCityWeather(cityDiv);
    });

    cityDiv.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') { 
            e.preventDefault(); 
            updateCityWeather(cityDiv);
        }
    });
}

function updateCityWeather(cityDiv) {
    let newCity = cityDiv.textContent.trim();
    if (!newCity) {
        newCity = 'Melbourne';
    }
    updateWeatherForCity(newCity);
}

function getMainElement() {
    const main = document.querySelector('main');
    if (!main) {
        console.error('Main element not found');
        return null;
    }
    return main;
}

function createWeatherCard(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const weatherCardHtml = `
        <div class="weather-card">
            <div class="weather-location" contenteditable="true">${weatherData.location.name}</div>
            <div class="weather-condition">${weatherData.current.condition.text}</div>
            <div class="weather-temperature">${weatherData.current.temp_c} °C</div>
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', weatherCardHtml);
    addCityEditListener();
}


function createForecastGroup(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'weather-forecast';

    weatherData.forecast.forecastday.forEach(day => {
        const weekdayDiv = document.createElement('div');
        weekdayDiv.className = 'weekday';

        const dayDiv = document.createElement('div');
        dayDiv.textContent = getWeekday(day.date);

        const conditionDiv = document.createElement('div');
        conditionDiv.textContent = day.day.condition.text;

        const tempDiv = document.createElement('div');
        tempDiv.textContent = `${day.day.avgtemp_c} °C`;

        weekdayDiv.appendChild(dayDiv);
        weekdayDiv.appendChild(conditionDiv);
        weekdayDiv.appendChild(tempDiv);

        forecastContainer.appendChild(weekdayDiv);
    });

    main.appendChild(forecastContainer);
}

function getWeekday(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function createParaGrid(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const parameters = [
        [
            { name: "Sunrise", value: weatherData.forecast.forecastday[0].astro.sunrise },
            { name: "Sunset", value: weatherData.forecast.forecastday[0].astro.sunset },
            { name: "Chance of Rain", value: `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %` },
            { name: "Humidity", value: `${weatherData.current.humidity} %` },
            { name: "Wind", value: `${weatherData.current.wind_kph} km/h` }
        ],
        [
            { name: "Feels Like", value: `${weatherData.current.feelslike_c} °C` },
            { name: "Visibility", value: `${weatherData.current.vis_km} km` },
            { name: "Pressure", value: `${weatherData.current.pressure_mb} hPa` },
            { name: "UV Index", value: weatherData.current.uv },
            { name: "Precipitation", value: `${weatherData.current.precip_mm} mm` }
        ]
    ];

    const paramGrid = document.createElement('div');
    paramGrid.className = 'param-grid';

    parameters.forEach(rowParams => {
        const row = document.createElement('div');
        row.className = 'row';

        rowParams.forEach(param => {
            const paramGroup = document.createElement('div');
            paramGroup.className = 'param-pair';

            const paramName = document.createElement('p');
            paramName.textContent = param.name;

            const paramValue = document.createElement('p');
            paramValue.textContent = param.value;

            paramGroup.appendChild(paramName);
            paramGroup.appendChild(paramValue);
            row.appendChild(paramGroup);
        });

        paramGrid.appendChild(row);
    });

    main.insertAdjacentElement('afterend', paramGrid);
}


// test functionality
const city = 'niigata';
getWeather(city)
    .then(data => createWeatherCard(data));

getWeather(city).then(data => createForecastGroup(data));

getWeather(city).then(data => createParaGrid(data));