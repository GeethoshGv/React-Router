import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  const [phoneItems, setPhoneItems] = useState([]);

  useEffect(() => {
    fetch("/api/category/items")
      .then((res) => res.json())
      .then((data) => setPhoneItems(data.items));
  }, []);

  const phoneElements = phoneItems.map((item) => (
    <div key={item.id} className="product-tile">
      <Link to={`/category/items/${item.id}`}>
        <img src={item.imageUrl} alt={item.name} />
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
      <section className="featureSection">
        <div className="product-list-container">
          <h1>Phone Products</h1>
          <div className="product-list">{phoneElements}</div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
