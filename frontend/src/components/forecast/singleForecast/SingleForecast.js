import React from "react";

import "./SingleForecast.scss";

const SingleForecast = ({ data }) => {
  return (
    <div className="single-forecast">
      <div className="day">
        <h2>{data.day}</h2>
      </div>
      <div className="image-condition">
        <span>
          <i className={`wi wi-yahoo-${data.code}`}></i>
        </span>
        <h2>{data.text}</h2>
      </div>
      <div className="temperature">
        <h3>
          <i className="wi wi-thermometer-exterior"></i>
          {data.low}
        </h3>
        <h3>
          <i className="wi wi-thermometer"></i>
          {data.high}
        </h3>
      </div>
    </div>
  );
};

export default SingleForecast;
