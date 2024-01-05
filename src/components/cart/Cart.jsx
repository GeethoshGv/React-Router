import React, { useState } from "react";
import "./cart.scss";
import { emptycart } from "../../assets/img/img";

const Cart = () => {
  const [login, setlogin] = useState("false");

  return (
    <>
      <section className="cartsection">
        <main>
          <div className="butdiv">
            <button
              onClick={() => {
                setlogin(!login);
              }}
            >
              {" "}
              {login ? "Login" : "Logout"}
            </button>
          </div>

          <div className="renderdiv">
            {login ? (
              <div className="signin">
                <h1>Log in</h1>
                <h3>or</h3>
                <h1>Sign in</h1>
              </div>
            ) : (
              <div className="afterlogin">
                <div className="imgdiv">
                  <img src={emptycart} alt="" />
                </div>
                <h1>Your Cart is Empty </h1>
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
};

export default Cart;
