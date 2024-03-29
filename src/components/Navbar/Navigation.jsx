import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { search, logo } from "../../assets/img/img";
import "./nav.scss";

const Navigation = () => {
  const [searchText, setSearchText] = useState("");

  const [nitem, setItem] = useState([]);

  const run = () => {
    fetch(`/api/items/${searchText}`)
      .then((res) => res.json())
      .then((data) => setItem(data.items));
  };

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
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Product"
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button onClick={run}>
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </nav>

      <Link to={`/feature/${searchText}`} style={{ textDecoration: "none" }}>
        <p style={{ color: "black" }}>name: {nitem.name}</p>
        <p style={{ color: "black" }}>price: {nitem.price}</p>
        <img src={nitem.imageUrl} alt="" width={"110px"} />
      </Link>
    </>
  );
};

export default Navigation;
