function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />

      <p>Temperature: {weather.temperature}°C</p>
      <p>Feels Like: {weather.feelsLike}°C</p>
      <p>Condition: {weather.condition}</p>
      <p>Description: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
}

export default WeatherCard;
