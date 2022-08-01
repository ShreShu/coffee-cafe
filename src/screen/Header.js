import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpg";
import Example from "../Example/Example";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.userMail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/", { replace: true });
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
      </div>
      <div className="header__right__phone">
        <Example />
      </div>
      <div className="header__right">
        {!isLoggedIn && (
          <Link to="signin" className="header__link myButton">
            Sign In
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="signup" className="header__link myButton">
            Join Now
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/menu" className="header__link">
            Welcome {email}
          </Link>
        )}

        {isLoggedIn && (
          <button onClick={logout} className="header__link myButton">
            Logout
          </button>
        )}
        <Link to="/menu" className="header__link">
          Find a store
        </Link>
      </div>
    </div>
  );
};

export default Header;
