import { Link } from "react-router-dom";
import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin">
      <h1 className="signin__heading">Sign in or create an account</h1>
      <div className="signin__form__div">
        <form className="signin__form">
          <div className="signin__form__input"></div>
          <div className="signin__form__input">
            <input type="text" name="" placeholder="Email" />
          </div>
          <div className="signin__form__input">
            <input type="text" name="" placeholder="password" />
          </div>
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

          <button>
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
