import React from "react";

import "./MainForecast.scss";

const MainForecast = ({ data }) => {
  const { location, current_observation: observation } = data;

  return (
    <div className="main-forecast">
      <div className="city">
        <h1>{`${location.city}, ${location.country}`}</h1>
      </div>
      <div className="temp-humidity">
        <h2>
          <i className="wi wi-thermometer"></i>
          {observation.condition.temperature}&#8451;
        </h2>
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
        <h2>
          <i className="wi wi-strong-wind"></i>
          {`${observation.wind.speed}km/h`}
        </h2>
      </div>
    </div>
  );
};

export default MainForecast;
