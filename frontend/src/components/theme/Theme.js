import React from "react";

import "./Theme.scss";

const Theme = ({ theming, children }) => {
  const clickHandler = (themeName) => {
    theming(themeName);
    localStorage.setItem("theme", themeName);
  };

  return (
    <>
      <div className="theme">
        <i
          className="wi wi-day-sunny"
          onClick={() => clickHandler("light")}
        ></i>
        <i
          className="wi wi-moon-waxing-crescent-4"
          onClick={() => clickHandler("dark")}
        ></i>
      </div>
      {children}
    </>
  );
};

export default Theme;
