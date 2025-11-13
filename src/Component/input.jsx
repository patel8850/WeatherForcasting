import { useWeather } from "../Context/Weather";
import { getWeatherCity } from "../index";
import logo from "../assets/Search_logo.png";

const Input = () => {
  const weather = useWeather();

  const handleSearch = async () => {
    const result = await getWeatherCity(weather.searchCity);

    if (result.error) {
      alert(
        `No weather data found for "${weather.searchCity}". Please check the spelling and try again.`
      );
    } else {
      weather.setData(result.data);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center mt-10 w-full  gap-3">
      <div className="mx-3 w-full sm:w-3/4 md:w-3/4 lg:w-3/4 h-11 flex bg-gray-800 rounded-2xl focus-within:border-blue-500 transition border-2">
        <img className="ml-2 mt-2 h-8 w-8" src={logo} alt="Search Icon" />
        <input
          className=" flex-1 text-[12px] sm:text-lg md:text-lg lg:text-lg text-white bg-transparent outline-none px-3"
          type="text"
          placeholder="Search any Location, City, State or Country"
          value={weather.searchCity}
          onChange={(e) => weather.setsearchCity(e.target.value)}
        />
      </div>

      <button
        className="
  mx-3 
  bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
  text-white font-semibold 
  py-2 px-6 rounded-xl 
  w-full sm:w-auto h-12 
  transition-all duration-200 ease-in-out 
  transform active:scale-95 
  shadow-md hover:shadow-lg
"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
