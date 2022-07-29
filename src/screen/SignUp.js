import { Link } from "react-router-dom";
import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <h1 className="signup__heading">Create an account</h1>
      <div className="signup__form__div">
        <form className="signup__form">
          <div className="signup__form__input"></div>
          <div className="signup__form__input">
            <input type="text" name="" placeholder="Email" />
          </div>
          <div className="signup__form__input">
            <input type="text" name="" placeholder="password" />
          </div>
          <div>
            <Link to="/signin" className="signup__forgot">
              Already have account?
            </Link>
          </div>

          <button>
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
