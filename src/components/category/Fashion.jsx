import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Fashion = () => {
  const [fashionItems, setfashionItems] = useState([]);

  useEffect(() => {
    fetch("/api/category/items/fashion")
      .then((res) => res.json())
      .then((data) => setfashionItems(data.items));
  }, []);

  const fashionElements = fashionItems.map((item) => (
    <div key={item.id} className="product-tile">
      <Link to={`/category/fashion/${item.id}`}>
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
          <h1>Fashion Products</h1>
          <div className="product-list">{fashionElements}</div>
        </div>
      </section>
    </>
  );
};

export default Fashion;
