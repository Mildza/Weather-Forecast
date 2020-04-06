import React from "react";

import "./MultiForecast.scss";
import SingleForecast from "../singleForecast/SingleForecast";

const MultiForecast = ({ data }) => {
  const { forecasts } = data;

  return (
    <div className="multi-forecast">
      {forecasts
        .filter((el, i) => i !== 0)
        .map((el) => (
          <SingleForecast key={el.date} data={el} />
        ))}
    </div>
  );
};

export default MultiForecast;
