import { useQuery } from "@tanstack/react-query";
import fetchWeather from "../api/fetchWeather";

export type WeatherData = {
  temperature: number;
};

type WeatherPropsType = {
  capital: string;
};

function Weather({ capital }: WeatherPropsType) {
  const { data, isLoading, error } = useQuery<WeatherData>({
    queryKey: ["weather", capital],
    queryFn: () => fetchWeather(capital),
  });

  const cellClass = "text-right px-4 py-3";

  if (isLoading)
    return <td className={`${cellClass} animate-pulse`}>Loading weather</td>;
  if (error) return <td className={cellClass}>Error loading weather</td>;
  if (!data) return <td className={cellClass}>No weather available</td>;

  return <td className={cellClass}>{data.temperature}°C</td>;
}
export default Weather;
