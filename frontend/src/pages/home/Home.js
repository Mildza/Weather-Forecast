import React, { useState, useEffect } from "react";

import axios from "axios";

import "./Home.scss";
import SingleForecast from "./../../components/forecast/singleForecast/SingleForecast";
import MultiForecast from "../../components/forecast/multiForecast/MultiForecast";

const Home = () => {
  const [weather, setWeather] = useState();

  async function getForecast() {
    await axios.get("http://localhost:3001/yahoo").then(response => {
      setWeather(response.data);
      console.log(response);
    });
  }

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className="default">
      {weather && (
        <div>
          <SingleForecast data={weather} />
          <MultiForecast data={weather} />
        </div>
      )}
    </div>
  );
};

export default Home;
