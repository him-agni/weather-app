const { fetchWeatherByCity } = require("../services/weatherService");

const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const weatherData = await fetchWeatherByCity(city);

    return res.status(200).json(weatherData);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch weather data",
    });
  }
};

module.exports = { getWeatherByCity };
