import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import "./feature.scss";

const Feature = () => {
  const [Maindetail, setMaindetail] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setMaindetail(data.items));
  }, []);

  const vanElements = Maindetail.map((item) => (
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
      <section className="featureSection">
        <div className="product-list-container">
          <h1>Feature Product</h1>
          <div className="product-list">{vanElements}</div>
        </div>
      </section>
    </>
  );
};

export default Feature;
