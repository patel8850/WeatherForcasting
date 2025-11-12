import { useWeather } from "../Context/Weather";
import { getWeatherCity } from "../index";
import logo from "../assets/Search_logo.png";

const Input = () => {
  const weather = useWeather();

  const handleSearch = async () => {
    const result = await getWeatherCity(weather.searchCity);

    if (result.error) {
      alert(`No weather data found for "${weather.searchCity}". Please check the spelling and try again.`);
    } else {
      weather.setData(result.data);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center mt-10 w-full  gap-3">
      {/* Search Input Container */}
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 h-12 flex bg-gray-800 rounded-2xl focus-within:border-blue-500 transition border-2">
        <img className="ml-2 mt-2 h-8 w-8" src={logo} alt="Search Icon" />
        <input
          className="flex-1 text-lg text-white bg-transparent outline-none px-3"
          type="text"
          placeholder="Search any Location, City, State or Country"
          value={weather.searchCity}
          onChange={(e) => weather.setsearchCity(e.target.value)}
        />
      </div>

      {/* Search Button */}
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-xl w-full sm:w-auto h-12"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
