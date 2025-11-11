export const getWeatherCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5c83ff8d9b204d4bad275836252809&q=${city}&aqi=no`,
      { method: "GET" }
    );

    if (!response.ok) {
      return { error: true };
    }

    const data = await response.json();
    if (data.error) {
      return { error: true };
    }

    return { error: false, data };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { error: true };
  }
};
