import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here!</h2>
        <p>
          We unite people with our large selection of reasonably priced,
          thoughtfully crafted dishes from around the world! Our cuisine is made
          to satisfy foodies from all over the world, and we only utilize the
          best local ingredients. Our concept is food crazy!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
