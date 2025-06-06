import "../styles/houseplan.css";
import React, { useState } from "react";
import EditProduct from "./edit-product";
import DeleteProduct from "./delete-product";

const HousePlan = (props) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showHousePlan, setShowHousePlan] = useState(true);
  const [housePlan, setHousePlan] = useState(props);

  //const imageSrc = `https://portiaportia.github.io/json/images/house-plans/${housePlan.main_image}`;
  const imageSrc = `http://localhost:3002/${housePlan.main_image}`;
  //localhost:3001/
  //const imageSrc = `https://housing-backend-oubs.onrender.com/${housePlan.main_image}`;

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

  const editHousePlan = (housePlan) => {
    setHousePlan(housePlan);
  };

  const hideHousePlan = (housePlan) => {
    setShowHousePlan(false);
  };

  return (
    <>
      {showHousePlan ? (
        <div>
          {showEditProduct ? (
            <EditProduct
              closeProduct={closeEditProduct}
              editHousePlan={editHousePlan}
              _id={housePlan._id}
              name={housePlan.name}
              size={housePlan.size}
              main_image={housePlan.main_image}
              bedrooms={housePlan.bedrooms}
              bathrooms={housePlan.bathrooms}
              features={housePlan.features}
            />
          ) : (
            ""
          )}

          {showDeleteProduct ? (
            <DeleteProduct
              closeProduct={closeDeleteProduct}
              hideHousePlan={hideHousePlan}
              _id={housePlan._id}
              name={housePlan.name}
            />
          ) : (
            ""
          )}
          <section className="house-plan columns">
            <section className="feature-image">
              <img src={imageSrc} alt={housePlan.name} />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{housePlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditProduct}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteProduct}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Size: {housePlan.size}</p>
              <p>Bedrooms: {housePlan.bedrooms}</p>
              <p>Bathrooms: {housePlan.bathrooms}</p>
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HousePlan;