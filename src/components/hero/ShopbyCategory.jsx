import React from "react";
import { toy, headset, phone, shirt, tv, deals } from "../../assets/img/img";

const ShopbyCategory = () => {
  return (
    <>
      <div className="shopbycategory">
        <div>
          <div className="imgcat">
            <img src={phone} alt="" />
          </div>
          <h6>Mobile</h6>
        </div>
        <div>
          <div className="imgcat">
            <img src={shirt} alt="" />
          </div>
          <h6>Fashion</h6>
        </div>
        <div>
          <div className="imgcat">
            <img src={headset} alt="" />
          </div>
          <h6>Electronics</h6>
        </div>
        <div>
          <div className="imgcat">
            <img src={deals} alt="" />
          </div>
          <h6>Deals</h6>
        </div>
        <div>
          <div className="imgcat">
            <img src={tv} alt="" />
          </div>
          <h6>Appliances</h6>
        </div>
        <div>
          <div className="imgcat">
            <img src={toy} alt="" />
          </div>
          <h6>Toys</h6>
        </div>
      </div>
    </>
  );
};

export default ShopbyCategory;
