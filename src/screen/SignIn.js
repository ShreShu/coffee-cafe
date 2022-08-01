import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignIn.css";
import { Login_API } from "../Apis/URLs";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userActions } from "../features/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ errorstate: false, errorMessage: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setEmailHandler = (e) => {
    setError({ errorstate: false, errorMessage: "" });
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setError({ errorstate: false, errorMessage: "" });
    setPassword(e.target.value);
  };

  const loginAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(Login_API, {
        email,
        password,
        returnSecureToken: true,
      });
      dispatch(
        userActions.login({
          token: response.data.idToken,
          email: response.data.email,
        })
      );
      navigate("/");
      setEmail("");
      setPassword("");

      console.log(response);
    } catch (e) {
      console.log(e.response.data.error.message);
      setError({
        errorstate: true,
        errorMessage: e.response.data.error.message,
      });
    }
  };

  return (
    <div className="signin">
      <h1 className="signin__heading">Sign in or create an account</h1>
      <div className="signin__form__div">
        <form className="signin__form" onSubmit={loginAccount}>
          <div className="signin__form__input"></div>
          <div className="signin__form__input">
            <input
              type="text"
              placeholder="Email"
              onChange={setEmailHandler}
              value={email}
            />
          </div>
          <div className="signin__form__input">
            <input
              type="password"
              placeholder="password"
              onChange={setPasswordHandler}
              value={password}
            />
          </div>
          {error.errorstate && (
            <center style={{ color: "red" }}>{error.errorMessage}</center>
          )}
          <div>
            <Link to="forgot-password" className="signin__forgot">
              Forgot password?
            </Link>
          </div>
          <div>
            <Link to="/signup" className="signin__forgot">
              Don't have a account?
            </Link>
          </div>

          <button type="submit">
            Log in
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
