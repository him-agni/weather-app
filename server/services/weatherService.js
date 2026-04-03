const fetchWeatherByCity = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather");
  }

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    condition: data.weather[0].main,
    description: data.weather[0].description,
    windSpeed: data.wind.speed,
    icon: data.weather[0].icon,
  };
};

module.exports = { fetchWeatherByCity };
