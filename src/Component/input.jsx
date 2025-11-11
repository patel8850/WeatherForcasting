import { useWeather } from "../Context/Weather";
import { getWeatherCity } from "../index"; // import the API function
import logo from "../assets/Search_logo.png";

const Input = () => {
  const weather = useWeather();

  const handleSearch = async () => {
    const result = await getWeatherCity(weather.searchCity);

    if (result.error) {
      alert(`No weather data found for "${weather.searchCity}". Please check the spelling and try again.`);
    } else {
      weather.setData(result.data); // ✅ update context with API result
    }
  };

  return (
    <div className="flex items-center mt-15 gap-3">
      <div className="w-150 h-13 flex bg-gray-800 rounded-2xl focus-within:border-blue-500 transition border-3 ">
        <img className="ml-2 mt-2 h-8 w-8" src={logo} alt="" />
        <input
          className="w-150 text-lg text-white outline-none"
          type="text"
          placeholder="Search any Location, City, State or Country"
          value={weather.searchCity}
          onChange={(e) => weather.setsearchCity(e.target.value)}
        />
      </div>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:blue-900 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-xl w-30 h-13"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
