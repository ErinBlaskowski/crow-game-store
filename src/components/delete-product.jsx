import "./dialog.css";
import React, { useState } from "react";

const DeleteProduct = (props) => {
  const [result, setResult] = useState("");

  const deleteProductPlan = async (event) => {
    const response = await fetch(
      `https://gamestore-backend-kaxi.onrender.com/api/products-json/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Product Plan Successfully deleted");
      props.hideProductPlan();
    } else {
      console.log("Error deleting product", response);
      setResult(response.message);
    }

    props.closeProduct();
  };

  return (
    <div id="delete-product" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="product-close"
            className="w3-button w3-display-topright"
            onClick={props.closeProduct}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={deleteProductPlan}>Yes</button>
              <button onClick={props.closeProduct}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;