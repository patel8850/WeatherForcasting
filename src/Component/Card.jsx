import { useWeather } from "../Context/Weather";
import weather_logo from "../assets/weatherlogo.jpeg";

const Card = () => {
  const weather = useWeather();

  if (!weather.data) {
    return (
      <div className="mt-10 sm:mt-20 md:mt-20 lg- mx-6 flex flex-col items-center justify-center min-h-[20] bg-gradient-to-br from-blue-50/50 to-cyan-100/70 rounded-3xl p-4 sm:p-8">
        <div className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <img
              className="mix-blend-multiply bg-transparent w-full h-full object-cover rounded-full"
              src={weather_logo}
              alt="Weather logo"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-3 sm:mb-4">
            Weather Forecast
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-md mx-auto">
            Search for a city above to see current weather conditions and
            forecast
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-4 sm:px-8 mt-10">
        <p className="mt-4 sm:mt-8 text-2xl sm:text-4xl font-semibold text-gray-800 text-center sm:text-left">
          {weather.data?.location?.name} Weather Conditions
        </p>
        <p className="text-xl sm:text-3xl font-semibold text-gray-700 mt-2 text-center sm:text-left">
          Current Temperature Level
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between mt-6 sm:mt-10">
          <div className="text-center sm:text-left">
            <p className="text-5xl sm:text-6xl font-bold text-gray-900">
              {weather.data?.current?.temp_c}°C
            </p>
            <p className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-lg sm:text-xl py-2 sm:py-3 my-3 px-6 text-white inline-block rounded-3xl shadow-lg">
              {weather.data?.current?.condition?.text}
            </p>
          </div>

          <div className="sm:mt-0  sm:ml-10 flex flex-col items-center text-center  sm:text-right">
            <img
              className=" sm:mr-15 sm:h-28 sm:w-28 drop-shadow-lg"
              src={weather?.data?.current?.condition?.icon}
              alt="Weather condition"
            />
            <p className=" sm:mr-15 text-gray-700 text-base sm:text-lg ">
              {weather.data?.location?.name}, {weather.data?.location?.region},
              {weather.data?.location?.country}
            </p>
          </div>
        </div>

        <div className="my-8 p-6 sm:p-8 bg-white/60 backdrop-blur-sm text-gray-800 text-lg sm:text-xl w-full rounded-3xl shadow-lg border border-white/40">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-2xl">
              <p className="text-gray-600">Feels Like</p>
              <p className="font-bold text-xl sm:text-2xl text-blue-700">
                {weather.data?.current.feelslike_c}°C
              </p>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-2xl">
              <p className="text-gray-600">Humidity</p>
              <p className="font-bold text-xl sm:text-2xl text-green-700">
                {weather.data?.current.humidity}%
              </p>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-2xl">
              <p className="text-gray-600">Wind</p>
              <p className="font-bold text-xl sm:text-2xl text-purple-700">
                {weather.data?.current.wind_kph} Km/h
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {weather.data?.current.wind_dir}
              </p>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-2xl">
              <p className="text-gray-600">Pressure</p>
              <p className="font-bold text-xl sm:text-2xl text-orange-700">
                {weather.data?.current.pressure_mb} mb
              </p>
            </div>

            <div className="text-center p-4 bg-cyan-50 rounded-2xl">
              <p className="text-gray-600">Visibility</p>
              <p className="font-bold text-xl sm:text-2xl text-cyan-700">
                {weather.data?.current.vis_km} Km
              </p>
            </div>

            <div className="text-center p-4 bg-red-50 rounded-2xl">
              <p className="text-gray-600">UV Index</p>
              <p className="font-bold text-xl sm:text-2xl text-red-700">
                {weather.data?.current.uv}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
