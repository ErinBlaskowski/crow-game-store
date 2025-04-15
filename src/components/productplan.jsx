import "./product.css";
import React, { useState } from "react";
import AddDialog from "./add-product.jsx";
import EditDialog from "./edit-product.jsx";
import DeleteDialog from "./delete-product.jsx";

const ProductPlan = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showProductPlan, setShowProductPlan] = useState(true);
  const [productPlan, setProductPlan] = useState(props);

  const imageSrc = `https://gamestore-backend-kaxi.onrender.com${productPlan.img_name}`;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
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
          {showEditDialog ? (
            <EditDialog
              closeDialog={closeEditDialog}
              editProductPlan={editProductPlan}
              _id={productPlan._id}
              name={productPlan.name}
              price={productPlan.price}
              img_name={productPlan.img_name}
            />
          ) : (
            ""
          )}

          {showDeleteDialog ? (
            <DeleteDialog
              closeDialog={closeDeleteDialog}
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
                  <a href="#" onClick={openEditDialog}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
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