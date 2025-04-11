import "./Store.css";
import Products from "../components/products.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

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
    </main>
  );
};

export default Store;
