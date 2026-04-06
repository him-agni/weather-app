export const getWeatherByCity = async (city) => {
  const response = await fetch(
    `http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch weather data");
  }

  return data;
};
