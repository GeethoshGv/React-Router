import React from "react";
import "../style.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div>
            <ul>
              <li>Amazon.in</li>
              <li>Amazon Pay</li>
              <li>Your List</li>
              <li>Sell</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Your Orders</li>
              <li>Your Account</li>
              <li>Returns</li>
              <li>Customer Service</li>
            </ul>
          </div>
        </div>
        <div className="rightsdiv">
          <div>
            <button>Already a customer? Sign in</button>
          </div>
          <div>
            <p>Condition of Use</p>
            <p>Privacy Notice</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
