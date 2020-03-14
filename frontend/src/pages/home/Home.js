import React, { useState, useEffect } from "react";

import axios from "axios";

import "./Home.scss";
import MainForecast from "./../../components/forecast/mainForecast/MainForecast";
import MultiForecast from "../../components/forecast/multiForecast/MultiForecast";

const Home = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("nis,serbia");

  async function getForecast() {
    await axios.get(`/yahoo/${city}`).then(response => {
      setWeather(response.data);
    });
  }

  useEffect(() => {
    getForecast();
  }, [city]);

  const getCity = city => {
    setCity(city);
  };

  return (
    <div className="default">
      {weather && (
        <div>
          <MainForecast
            data={weather}
            submit={i => {
              getCity(i);
            }}
          />
          <MultiForecast data={weather} />
        </div>
      )}
    </div>
  );
};

export default Home;
