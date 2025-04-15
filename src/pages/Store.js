import "./Store.css";
import Products from "../components/products.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductPlan from "../components/productplan.jsx";
import AddProduct from "../components/add-product.jsx";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://gamestore-backend-kaxi.onrender.com/api/products-json");
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    })();
  }, []);

  const [productPlans, setProductPlans] = useState([]);
      const [showAddProduct, setShowAddProduct] = useState(false);

      useEffect(() => {
        (async () => {
          const response = await axios.get(
            "https://gamestore-backend-kaxi.onrender.com/api/products-json"
          );
          setProductPlans(response.data);
        })();
      }, []);

      const addProductPlan = (productPlan) => {
        setProductPlans((productPlans) => [...productPlans, productPlan]);
      };

      const openAddProduct = () => {
        setShowAddProduct(true);
      };

      const closeAddProduct = () => {
        setShowAddProduct(false);
      };

  return (
    <main className="main">
      <h1>THE BEST GAMES AT THE BEST PRICES!</h1>

      <section className="product-grid">
        {products.map((product) => (
          <a
            key={product.name}
            href="/crow-game-store/itemPreview"
            className="product-link"
          >
            <Products
              name={product.name}
              price={product.price}
              img_name={product.img_name}
            />
          </a>
        ))}
      </section>

      <div id="prod">
          <button id="add-product" onClick={openAddProduct}>
            +
          </button>
          {showAddProduct ? (
            <AddProduct addProductPlan={addProductPlan} closeProduct={closeAddProduct} />
          ) : (
            ""
          )}
          {productPlans.map((productPlan) => (
            <ProductPlan
              key={productPlan.name}
              _id={productPlan._id}
              name={productPlan.name}
              price={ProductPlan.price}
              img_name={productPlan.img_name}
              />
          ))};
      </div>
        
    </main>
  );
};

export default Store;
