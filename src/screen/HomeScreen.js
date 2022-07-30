import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import feature_product from "../assests/feature.jpg";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Fade>
        <div className="homescreen__top">
          <div className="homescreen__title">
            <h1>Coffee Cafe</h1>
          </div>
          <div className="homescreen__title_join">
            <h2> Grab the coffee</h2>
            <Link to="signup" className="homescreen__joinnow myButton">
              Join Now
            </Link>
          </div>
        </div>
        <div className="homescreen__features">
          <div className="homescreen__featureProduct">
            <img src={feature_product} alt="" />
          </div>
          <div className="homescreen__featureProduct_order">
            <h2> Espresso shots </h2>
            <p>
              Espresso shots topped with hot water create a light layer of crema
              culminating in this wonderfully rich cup with depth and nuance.
            </p>
            <Link to="signup" className="homescreen_order myButton">
              Order Now
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomeScreen;
