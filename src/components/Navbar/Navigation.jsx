import React from "react";
import { Link, NavLink } from "react-router-dom";
import { search, logo } from "../../assets/img/img";
import "./nav.scss";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li className="#sidebar">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "white",
                  };
                }}
              >
                <img src={logo} alt="" width={"100px"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="category"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "white",
                  };
                }}
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to="feature"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "white",
                  };
                }}
              >
                Feature
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "white",
                  };
                }}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
          <div className="actualsearch">
            <input type="search" name="" id="" placeholder="Search Product" />

            <button>
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
