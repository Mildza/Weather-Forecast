import React, { useState } from "react";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ErrorMesags from "./components/errorMesages/ErrorMesages";

import UserContext from "./shared/context/UserContext";
import ErrorContext from "./shared/context/ErrorContext";

import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");

  const logHandler = value => {
    setUser(value);
  };

  const setError = value => {
    setMessage(value);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, logHandler }}>
        <ErrorContext.Provider value={{ message, setError }}>
          <ErrorMesags />
          {user ? <Login /> : <Home />}
        </ErrorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
