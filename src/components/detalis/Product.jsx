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
        <div className="productbackbutton">
          <button>
            <Link to=".." relative="path">
              Back
            </Link>
          </button>
        </div>
        <div className="product-container">
          {detail ? (
            <>
              <div className="product-detail">
                <div className="detimgdiv">
                  <img src={detail.imageUrl} />
                </div>

                <div>
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
              </div>
            </>
          ) : (
            <div className="loading">
              <span class="loader"></span>
              <h1>loading</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
