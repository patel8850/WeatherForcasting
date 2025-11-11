import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setsearchCity] = useState("");

  return (
    <WeatherContext.Provider value={{ data, setData, searchCity, setsearchCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
