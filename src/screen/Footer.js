import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer">
      <Fade>
        <div className="footer__left">
          <h3 className="footer__title">Address</h3>
          <p className="word">
            Coffee caffe NH 22 Adarsh Nagar Sarai,Vaishali 9876778987
          </p>
        </div>
        <div className="footer__middle">
          <h3 className="footer__title">Hours of operation</h3>
          <p>Weekdays 7am - 2pm incl Pickup Window</p>
          <p>Weekends - 8am - 3pm incl Pickup Window</p>
        </div>
        <div className="footer__right">
          <h3 className="footer__title">Connect</h3>
          <FacebookIcon className="footer__icon" />
          <InstagramIcon className="footer__icon" />
          <TwitterIcon className="footer__icon" />
          <YouTubeIcon className="footer__icon" />
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
