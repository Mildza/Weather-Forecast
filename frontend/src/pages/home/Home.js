import React, { useState, useContext, useEffect } from "react";

import axios from "axios";

import "./Home.scss";
import MainForecast from "./../../components/forecast/mainForecast/MainForecast";
import MultiForecast from "../../components/forecast/multiForecast/MultiForecast";

import ErrorContext from "./../../shared/context/ErrorContext";

const Home = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("nis,serbia");
  const { setError } = useContext(ErrorContext);

  const getForecast = () => {
    axios
      .get(`/yahoo/${city}`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getForecast();
  }, [city]);

  const getCity = (city) => {
    setCity(city);
  };

  return (
    <div>
      {weather && (
        <>
          <MainForecast
            data={weather}
            submit={(i) => {
              getCity(i);
            }}
          />
          <MultiForecast data={weather} />
        </>
      )}
    </div>
  );
};

export default Home;
