import "./dialog.css";
import React, { useState } from "react";

const AddProduct = (props) => {
  const [result, setResult] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleImageChange = (event) => {
    setImgSrc(URL.createObjectURL(event.target.files[0]))
    
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch("https://gamestore-backend-kaxi.onrender.com/api/store", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Product Successfully Added");
      event.target.reset(); 
      props.addProductPlan(await response.json());
      props.closeProduct();
    } else {
      console.log("Error adding product", response);
      setResult(response.message);
    }
  };

  return (
    <div id="add-product" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="product-close"
            className="w3-button w3-display-topright"
            onClick={props.closeProduct}
          >
            &times;
          </span>
          <form id="add-product-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Product Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p>
              <label htmlFor="price ">Product Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                required
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                {imgSrc?(
                  <img
                  id="img-prev"
                  src={imgSrc}
                  alt=""
                />
                ):("")}
                
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;