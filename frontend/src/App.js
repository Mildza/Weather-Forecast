import React, { useState } from "react";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ErrorMesags from "./components/errorMesages/ErrorMesages";
import Theme from "./components/theme/Theme";

import UserContext from "./shared/context/UserContext";
import ErrorContext from "./shared/context/ErrorContext";

import "./App.scss";

function App() {
  const localTheme = localStorage.getItem("theme");
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState(localTheme || "light");

  const logHandler = (value) => {
    setUser(value);
  };

  const setError = (value) => {
    setMessage(value);
  };

  const changeTheme = (themeName) => {
    setTheme(themeName);
  };

  return (
    <div className={`app ${theme}`}>
      <UserContext.Provider value={{ user, logHandler }}>
        <ErrorContext.Provider value={{ message, setError }}>
          <ErrorMesags />
          <Theme
            theming={(themeName) => {
              changeTheme(themeName);
            }}
          >
            {!user ? <Login /> : <Home />}
          </Theme>
        </ErrorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
