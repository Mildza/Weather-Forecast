import React from "react";

import "./MultiForecast.scss";

const MultiForecast = ({ data }) => {
  const { forecasts } = data;
  console.log(forecasts);

  return (
    <div className="default">
      <h1>Multi</h1>
    </div>
  );
};

export default MultiForecast;
