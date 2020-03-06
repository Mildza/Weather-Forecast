import React, { useContext } from "react";

import ErrorContext from "./../../shared/context/ErrorContext";

import "./ErrorMesages.scss";

const ErrorMesages = () => {
  const { message, setError } = useContext(ErrorContext);

  if (message) {
    setTimeout(() => setError(""), 3000);
  }

  return !message ? null : (
    <div className="error-message">
      <div className="content">{message}</div>
    </div>
  );
};

export default ErrorMesages;
