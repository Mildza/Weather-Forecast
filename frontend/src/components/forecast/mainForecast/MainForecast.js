import React, { useState } from "react";

import "./MainForecast.scss";

import Button from "./../../button/Button";

const MainForecast = ({ submit, data }) => {
  const { location, current_observation: observation } = data;
  const [search, setSearch] = useState("");
  const { low, high } = data.forecasts[0];

  const inputhandler = e => {
    setSearch(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    submit(search);
  };

  return (
    <div className="main-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="city,country"
          value={search}
          onChange={inputhandler}
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="main-forecast">
        <div className="city">
          <h1>{`${location.city}, ${location.country}`}</h1>
        </div>
        <div className="temp-humidity">
          <h2>{observation.condition.temperature}&#8451;</h2>
          <h2>
            <i className="wi wi-humidity"></i>
            {observation.atmosphere.humidity}
          </h2>
        </div>
        <div className="image-condition">
          <span>
            <i className={`wi wi-yahoo-${observation.condition.code}`}></i>
          </span>
          <h2>{observation.condition.text}</h2>
        </div>
        <div className="sun">
          <h2>
            <i className="wi wi-sunrise"></i>
            {observation.astronomy.sunrise}
          </h2>
          <h2>
            <i className="wi wi-sunset"></i>
            {observation.astronomy.sunset}
          </h2>
        </div>
        <div className="wind-pressure">
          <h2>
            <i className="wi wi-barometer"></i>
            {`${observation.atmosphere.pressure}h/Pa`}
          </h2>
          <div className="low-high">
            <h2>
              <i className="wi wi-thermometer-exterior"></i>
              {low}
            </h2>
            <h2>
              <i className="wi wi-thermometer"></i>
              {high}
            </h2>
          </div>
          <h2>
            <i className="wi wi-strong-wind"></i>
            {`${observation.wind.speed}km/h`}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainForecast;
