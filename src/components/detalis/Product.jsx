import React from "react";
import { useParams, Link } from "react-router-dom";
import "./details.scss";

const Product = () => {
  const params = useParams();
  const [detail, setdetail] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/items/${params.id}`)
      .then((res) => res.json())
      .then((data) => setdetail(data.items));
  }, [params.id]);

  return (
    <>
      <section className="product">
        <Link to=".." relative="path" className="productbackbutton">
          Back
        </Link>
        <div className="product-container">
          {detail ? (
            <div className="product-detail">
              <img src={detail.imageUrl} />

              <h2>{detail.name}</h2>
              <p>{detail.description}</p>
              <p className="price">
                <span>Price :- $ {detail.price}</span>
              </p>
              <div className="buttdiv">
                <button className="product-button">Buy Now</button>
                <button className="product-button">Add To Cart</button>
              </div>
            </div>
          ) : (
            <div className="loading">
              <h2>Loading...</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
