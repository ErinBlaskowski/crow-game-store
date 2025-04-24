import "./dialog.css";
import React, { useState } from "react";

const EditProduct = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("http://localhost:3000" + props.img_name);

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch(
      `https://gamestore-backend-kaxi.onrender.com/api/store/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Product Successfully updated");
      event.target.reset(); 
      props.editProductPlan(await response.json());
      props.closeProduct();
    } else {
      console.log("Error editing product", response);
      setResult(response.message);
    }
  };

  return (
    <div id="edit-product" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="product-close"
            className="w3-button w3-display-topright"
            onClick={props.closeProduct}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Product Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={props.price}
                required
              />
            </p>

            <section className="columns">
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!=""?
                            (<img id="img-prev" src={prevSrc}></img>):
                            ("")
                            }
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img_name" name="img" accept="image/*" onChange={uploadImage} />
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

export default EditProduct;