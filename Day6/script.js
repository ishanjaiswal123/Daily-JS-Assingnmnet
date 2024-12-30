const API_KEY = '6e86fcee745469ec137d6e859373af39';
const URL = 'http://api.weatherstack.com/forecast';

async function getWeatherData(location = 'Kanpur') {

    document.querySelector('.temperature').textContent = 'Loading...';
    document.querySelector('.description').textContent = 'Please wait';
    
    try {
        const response = await fetch(`${URL}?access_key=${API_KEY}&query=${location}`);
        const data = await response.json();
        
        if (data.error) {
            console.error(data.error);
        }
        
        updateWeatherUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

function updateWeatherUI(data) {
    document.querySelector('.location').textContent = `${data.location.name}, ${data.location.country}`;
    
    document.querySelector('.temperature').textContent = `${data.current.temperature}°C`;
    document.querySelector('.description').textContent = data.current.weather_descriptions[0];
    
    document.querySelector('.weather-card p').textContent = `Feels like: ${data.current.feelslike}°C`;
    
    document.querySelector('.weather-details .weather-info .weather-card:first-child p')
        .textContent = `${data.current.wind_speed} km/h`;
    document.querySelector('.weather-details .weather-info .weather-card:last-child p')
        .textContent = `${data.current.humidity}%`;
}

function searchWeather() {
    const cityInput = document.getElementById('citySearch');
    const city = cityInput.value;
    
    if (city) {
        getWeatherData(city);
    }
}

function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                getWeatherData(`${latitude},${longitude}`);
            },
            error => {
                console.error('Error getting location:', error);
                getWeatherData();
            }
        );
    } else {
        console.log('Geolocation is not supported');
        getWeatherData();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getUserLocation();
    
    document.getElementById('citySearch').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchWeather();
        }
    });
});
