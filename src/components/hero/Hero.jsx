import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import "./hero.scss";
import SwipContainer from "./SwipContainer";
import RechargeContainer from "./RechargeContainer";
import ShopbyCategory from "./ShopbyCategory";

const Hero = () => {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setVans(data.items));
  }, []);

  const vanElements = vans.map((item) => (
    <div key={item.id} className="product-tile">
      <Link to={`/feature/${item.id}`}>
        <img src={item.imageUrl} />
        <div className="product-info">
          <h3>{item.name}</h3>
          <p>
            ${item.price}
            <span></span>
          </p>
        </div>
      </Link>
    </div>
  ));
  return (
    <>
      <section className="herosection">
        <ShopbyCategory />
        <SwipContainer />
        <RechargeContainer />

        <div>
          <div className="product-list-container">
            <h1>Feature Product</h1>
            <div className="product-list">{vanElements}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
