import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { Sign_Up_API } from "../Apis/URLs";
import { useDispatch } from "react-redux";
import { userActions } from "../features/userSlice";
import { useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccountCreated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const createNewAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(Sign_Up_API, {
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
      setAccountCreated(true);
      setEmail("");
      setPassword("");

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (account) {
      navigate("/");
    }
  }, [account]);
  return (
    <div className="signup">
      <h1 className="signup__heading">Create an account</h1>
      <div className="signup__form__div">
        <form className="signup__form" onSubmit={createNewAccount}>
          <div className="signup__form__input"></div>
          <div className="signup__form__input">
            <input
              type="text"
              name=""
              placeholder="Email"
              onChange={setEmailHandler}
              value={email}
            />
          </div>
          <div className="signup__form__input">
            <input
              type="password"
              name=""
              placeholder="password"
              onChange={setPasswordHandler}
              value={password}
            />
          </div>
          <div>
            <Link to="/signin" className="signup__forgot">
              Already have account?
            </Link>
          </div>

          <button type="submit">
            Sign Up
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
