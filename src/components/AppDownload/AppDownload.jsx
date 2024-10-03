import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p style={{ color: "#6c757d" }}>
        For better experience download your
        <br />{" "}
        <span style={{ color: "#03045e", fontWeight: "bold" }}>
          {" "}
          Food Kraft{" "}
        </span>{" "}
        App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
