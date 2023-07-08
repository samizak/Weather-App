import dotenv from "dotenv";
import Footer from "../components/Footer";
import SearchInput from "../components/Header";
import SearchError from "../components/searchError";
dotenv.config();

async function GetDate(location: string, unit: string = "metric") {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=${unit}`
  );
  if (!res.ok) return { error: "Could not find specified location." };
  return res.json();
}

export default async function LocationWeather({ params }: { params: { location: string } }) {
  const data = await GetDate(params.location);

  if (data.hasOwnProperty("error")) {
    return <SearchError />;
  }
  const weatherData = {
    location: data.name,
    country: data.sys.country,

    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    temperatureMin: data.main.temp_min,
    temperatureMax: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,

    wind: data.wind.speed,

    description: data.weather[0].description,
  };

  return (
    <div className="flex flex-col justify-between min-h-screen text-white bg-gray-800">
      <SearchInput />

      <main className="flex flex-col justify-center w-7/12 mx-auto text-center">
        <p>
          {weatherData.location}, {weatherData.country}
        </p>

        <div className="flex flex-col gap-8 mx-auto">
          <div className="flex flex-row">
            <h1 className="text-8xl">{parseFloat(weatherData.temperature.toFixed(1))}</h1>
            <div className="h-full my-auto text-2xl">
              <div className="p-2 m-auto font-bold transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-600">
                °C
              </div>
              <div className="p-2 m-auto font-bold text-gray-400 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-600">
                °F
              </div>
            </div>
          </div>

          <div className="text-xl">
            <div className="italic">
              <span>{weatherData.temperatureMin} °C</span> / <span>{weatherData.temperatureMax} °C</span>
            </div>
            <p className="p-1 font-semibold">{weatherData.description}</p>
          </div>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-1 gap-8 mt-8 text-xl text-center sm:mt-16 sm:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">Pressure</p>
            <p className="text-xl">
              {weatherData.pressure} <span className="text-gray-400">hPa</span>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Wind</p>
            <p className="text-xl">
              {weatherData.wind} <span className="text-gray-400">km/h</span>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Feels like</p>
            <p className="text-xl">
              {weatherData.feels_like} <span className="text-gray-400">°C</span>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Humidity</p>
            <p className="text-xl">
              {weatherData.humidity} <span className="text-gray-400">%</span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
