import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Electronics = () => {
  const [electronicItems, setelectronicItems] = useState([]);

  useEffect(() => {
    fetch("/api/category/items/electronic")
      .then((res) => res.json())
      .then((data) => setelectronicItems(data.items));
  }, []);

  const electronicElements = electronicItems.map((item) => (
    <div key={item.id} className="product-tile">
      <Link to={`/feature/${item.id}`}>
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
          <h1>Electronic</h1>
          <div className="product-list">{electronicElements}</div>
        </div>
      </section>
    </>
  );
};

export default Electronics;
