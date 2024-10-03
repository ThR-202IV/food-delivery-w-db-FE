import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Food Kraft.
            </h2>
            <p style={{ fontSize: "13px" }}>
              Our cuisine is made to satisfy foodies from all over the world,
              and we only utilize the best local ingredients. Our concept is
              food crazy!
            </p>
            <div className="footer-social-icons">
              {/* <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" /> */}
              <FaXTwitter className="footer-icon-twitter" />
              <FaFacebook className="footer-icon-fb" />
              <FaInstagram className="footer-icon-ig" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Get the Food Kraft App</li>
              <li>Coupons</li>
              <li>Food Kraft VIP Benefits</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Customer Service</h2>
            <ul>
              <li>FAQs</li>
              <li>Contact Info</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        &copy;2009–{new Date().getFullYear()} - foodkraft.com •{" "}
        <span className="footer-copyright-span">Privacy Policy</span>
      </p>
    </>
  );
};

export default Footer;
