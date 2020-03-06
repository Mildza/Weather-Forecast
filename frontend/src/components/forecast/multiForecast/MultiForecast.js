import React from "react";

import "./MultiForecast.scss";
import SingleForecast from "../singleForecast/SingleForecast";

const MultiForecast = ({ data }) => {
  const { forecasts } = data;
  forecasts.shift();

  return (
    <div className="multi-forecast">
      {forecasts.map(el => (
        <SingleForecast key={el.date} data={el} />
      ))}
    </div>
  );
};

export default MultiForecast;
