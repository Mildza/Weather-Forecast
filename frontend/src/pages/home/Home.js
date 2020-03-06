import React, { useState, useEffect } from "react";

import axios from "axios";

import "./Home.scss";
import MainForecast from "./../../components/forecast/mainForecast/MainForecast";
import MultiForecast from "../../components/forecast/multiForecast/MultiForecast";

const Home = () => {
  const [weather, setWeather] = useState();

  async function getForecast() {
    await axios.get("/yahoo").then(response => {
      setWeather(response.data);
    });
  }

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className="default">
      {weather && (
        <div>
          <MainForecast data={weather} />
          <MultiForecast data={weather} />
        </div>
      )}
    </div>
  );
};

export default Home;
