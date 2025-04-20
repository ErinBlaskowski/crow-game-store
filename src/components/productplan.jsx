import "./product.css";
import React, { useState } from "react";
import AddProduct from "./add-product.jsx";
import EditProduct from "./edit-product.jsx";
import DeleteProduct from "./delete-product.jsx";

const ProductPlan = (props) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showProductPlan, setShowProductPlan] = useState(true);
  const [productPlan, setProductPlan] = useState(props);

  const imageSrc = `https://gamestore-backend-kaxi.onrender.com${productPlan.img_name}`;

  const openEditProduct = () => {
    setShowEditProduct(true);
  };

  const closeEditProduct = () => {
    setShowEditProduct(false);
  };

  const openDeleteProduct = () => {
    setShowDeleteProduct(true);
  };

  const closeDeleteProduct = () => {
    setShowDeleteProduct(false);
  };

  const editProductPlan = (productPlan) => {
    setProductPlan(productPlan);
  };

  const hideProductPlan = (productPlan) => {
    setShowProductPlan(false);
  };

  return (
    <>
      {showProductPlan ? (
        <div>
          {showEditProduct ? (
            <EditProduct
              closeProduct={closeEditProduct}
              editProductPlan={editProductPlan}
              _id={productPlan._id}
              name={productPlan.name}
              price={productPlan.price}
              img_name={productPlan.img_name}
            />
          ) : (
            ""
          )}

          {showDeleteProduct ? (
            <DeleteProduct
              closeProduct={closeDeleteProduct}
              hideProductPlan={hideProductPlan}
              _id={productPlan._id}
              name={productPlan.name}
            />
          ) : (
            ""
          )}
          <section className="product-plan columns">
            <section className="feature-image">
              <img src={imageSrc} alt={productPlan.name} />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{productPlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditProduct}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteProduct}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Size: {productPlan.price}</p>
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductPlan;