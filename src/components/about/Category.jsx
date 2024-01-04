import React from "react";
import "./Cat.scss";
import { Link, Outlet } from "react-router-dom";
import { iphone, sh, ele } from "../../assets/img/img";

const Category = () => {
  return (
    <>
      <div className="Catdiv">
        <div className="productbackbutton">
          <button>
            <Link className="Categorybackbutton" to="..">
              {" "}
              Back
            </Link>
          </button>
        </div>

        <h4>Shopby Category</h4>
        <div className="linkdiv">
          <Link to="mobile">
            <div className="imdiv">
              <img src={iphone} alt="" />
              <p>Mobile</p>
            </div>
          </Link>
          <Link to="fashion">
            <div className="imdiv">
              <img src={sh} alt="" />
              <p>Fashion</p>
            </div>
          </Link>
          <Link to="electronic">
            <div className="imdiv">
              <img src={ele} alt="" />
              <p>Electronic</p>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Category;
