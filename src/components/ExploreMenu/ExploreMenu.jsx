import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        We are dedicated to serving our guests the best of Sri Lanka's cuisines
        right here in their home country!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            /* if the previous categeory matches the clicked "item.menu_name" - this happens if we click the already chosen category again - then, we reset the category to "All", otherwise, we add the new "item.menu_name" as category */
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
            ></img>
            <p className={category === item.menu_name ? "active-category" : ""}>
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
