import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Message from "./components/Message";
import { getWeatherByCity } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <p className="subtitle">Search for current weather by city</p>

        <SearchBar city={city} setCity={setCity} onSubmit={handleSubmit} />

        {loading && <Message text="Loading weather..." type="loading" />}
        {error && <Message text={error} type="error" />}
        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </main>
  );
}

export default App;
