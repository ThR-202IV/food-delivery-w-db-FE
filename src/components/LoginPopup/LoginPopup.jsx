import React, { useContext, useState } from "react";
import axios from "axios";

import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let new_url = url;

    if (currentState === "Login") {
      new_url += "/api/user/login";
    } else {
      new_url += "/api/user/signup";
    }

    const response = await axios.post(new_url, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="name"
              onChange={onChangeHandler}
              name="name"
              value={data.name}
              required
            />
          )}
          <input
            type="email"
            placeholder="email"
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={onChangeHandler}
            name="password"
            value={data.password}
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Sign Up" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Sign up</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
