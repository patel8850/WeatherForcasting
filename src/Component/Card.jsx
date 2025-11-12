import { useWeather } from "../Context/Weather";
import weather_logo from "../assets/weatherlogo.jpeg"


const Card = () => {
  const weather = useWeather();
  
  if (!weather.data){
    return (
      <div className=" mt-20 flex flex-col items-center justify-center min-h-96 bg-gradient-to-br from-blue-50/50 to-cyan-100/50 rounded-3xl p-8">
        <div className="text-center">
          <div className="w-24 h-24  rounded-full flex items-center justify-center mx-auto mb-6">
         <img className="mix-blend-multiply bg-transparent" src={weather_logo} alt="" />
          </div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Weather Forecast
          </h2>
          <p className="text-xl text-gray-600 max-w-md">
            Search for a city above to see current weather conditions and forecast
          </p>
        </div>
      </div>
    );
  }else
  return (
    <div> 
      <p className="mt-8 text-4xl font-semibold text-gray-800">
        {weather.data?.location?.name} Weather Conditions
      </p>
      <p className="text-3xl font-semibold text-gray-700 mt-2">
        Current Temperature Level
      </p>
      
      <div className="flex ">
        <div className="my-5 text-center ">
          <p className="text-6xl font-bold text-gray-900">
            {weather.data?.current?.temp_c}°C
          </p>
          <p className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-xl py-3 my-3 px-6 text-white inline-block rounded-3xl shadow-lg">
            {weather.data?.current?.condition?.text}
          </p>
        </div>
        
        <div className="ml-25  text-2xl font-semibold flex flex-col items-center">
          <img
            className="h-28  w-28 drop-shadow-lg"
            src={weather?.data?.current?.condition?.icon}
            alt="Weather condition"
          />
          <p className="text-gray-700 text-center">
            {weather.data?.location?.name}, {weather.data?.location?.region},{" "}
            {weather.data?.location?.country}
          </p>
        </div>
      </div>
      
      <div className="my-8 p-8 bg-white/50 backdrop-blur-sm text-gray-800 text-xl w-full rounded-3xl shadow-lg border border-white/50">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-2xl">
            <p className="text-gray-600">Feels Like</p>
            <p className="font-bold text-2xl text-blue-700">
              {weather.data?.current.feelslike_c}°C
            </p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-2xl">
            <p className="text-gray-600">Humidity</p>
            <p className="font-bold text-2xl text-green-700">
              {weather.data?.current.humidity}%
            </p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-2xl">
            <p className="text-gray-600">Wind</p>
            <p className="font-bold text-2xl text-purple-700">
              {weather.data?.current.wind_kph} Km/h
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {weather.data?.current.wind_dir}
            </p>
          </div>
          
          <div className="text-center p-4 bg-orange-50 rounded-2xl">
            <p className="text-gray-600">Pressure</p>
            <p className="font-bold text-2xl text-orange-700">
              {weather.data?.current.pressure_mb} mb
            </p>
          </div>
          
          <div className="text-center p-4 bg-cyan-50 rounded-2xl">
            <p className="text-gray-600">Visibility</p>
            <p className="font-bold text-2xl text-cyan-700">
              {weather.data?.current.vis_km} Km
            </p>
          </div>
          
          <div className="text-center p-4 bg-red-50 rounded-2xl">
            <p className="text-gray-600">UV Index</p>
            <p className="font-bold text-2xl text-red-700">
              {weather.data?.current.uv}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;