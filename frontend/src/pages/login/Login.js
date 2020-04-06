import React, { useContext } from "react";
import axios from "axios";

import Button from "./../../components/button/Button";
import useForm from "./useForm";
import validate from "./validator";

import UserContext from "../../shared/context/UserContext";
import ErrorContext from "./../../shared/context/ErrorContext";

import "./Login.scss";

const Login = () => {
  const { handleChange, values, errors, formValid } = useForm(validate);
  const { logHandler } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);

  function submit(e) {
    e.preventDefault();
    axios
      .post("/auth", {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        if (response.data.status === 200) {
          logHandler(true);
        } else if (response.data.status === 401) {
          setError(response.data.message);
        } else {
          setError("Something went wrong!");
        }
      });
  }
  return (
    <div className="login">
      <form onSubmit={submit}>
        <div className="label">
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            placeholder="username"
            onChange={handleChange}
            value={values.username}
          />
          {errors.username && errors.dirty ? (
            <p className="errors">{errors.username}</p>
          ) : null}
        </div>
        <br />
        <div className="label">
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && errors.dirty ? (
            <p className="errors">{errors.password}</p>
          ) : null}
        </div>
        <div className="button">
          <Button disabled={!formValid}>Submit</Button>
        </div>
        <div className="secret">
          <p>username:admins password:123456</p>
        </div>
      </form>
    </div>
  );
};
export default Login;
