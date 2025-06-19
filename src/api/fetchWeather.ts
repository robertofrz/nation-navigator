import axios from "axios";

async function fetchWeather(city: string) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      temperature: data.main.temp,
    };
  } catch (error) {
    console.error("Error fetching weather data.");
    throw error;
  }
}

export default fetchWeather;
