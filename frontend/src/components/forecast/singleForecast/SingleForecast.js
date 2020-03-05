import React from "react";

import "./SingleForecast.scss";

const SingleForecast = ({ data }) => {
  const { location, current_observation: observation } = data;

  return (
    <div className="current-day">
      <h2>
        <i className="wi wi-strong-wind"></i>
        {`${observation.wind.speed}km/h`}
      </h2>
      <h1>{`${location.city}, ${location.country}`}</h1>
      <h2>
        <i className="wi wi-barometer"></i>
        {`${observation.atmosphere.pressure}h/Pa`}
      </h2>
      <h2>
        <i className="wi wi-humidity"></i>
        {observation.atmosphere.humidity}
      </h2>
      <div>
        <h2>{observation.condition.text}</h2>
        <span>
          <i className={`wi wi-yahoo-${observation.condition.code}`}></i>
        </span>
      </div>
      <div>
        <h2>
          <i className="wi wi-sunrise"></i>
          {observation.astronomy.sunrise}
        </h2>
        <h2>
          <i className="wi wi-sunset"></i>
          {observation.astronomy.sunset}
        </h2>
      </div>
      <h2>
        <i className="wi wi-thermometer"></i>
        {observation.condition.temperature}&#8451;
      </h2>
      <h2>{observation.condition.code}</h2>
    </div>
  );
};

export default SingleForecast;
