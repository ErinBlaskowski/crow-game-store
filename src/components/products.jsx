import "../pages/Store.css";
import React from "react";

const Products = ({ name, price, img_name, features = [] }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={img_name}
          alt={name}
          width="200"
          height="150"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/fallback-image.png"; 
          }}
        />
      </div>
      <div className="product-name">
        <h3>{name}</h3>
      </div>
      <div className="product-price">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Products;