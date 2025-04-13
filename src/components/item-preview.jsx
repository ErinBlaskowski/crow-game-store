import React from "react";
import product from "../images/Product.png";

const ItemPreviewContent = () => {
  return (
    <section className="flexbox box1">
      <img src={product} alt="Product Box" />
      <div className="text">
        <h3>Generic Product</h3>
        <h2>$20.00</h2>

        <h1>Contains:</h1>
        <p>
          One generic product from CrowPing Games, 20 game pieces, 40 game
          cards, 16 minifigures, 1d20, 1d12, 1d10, 1d8, 4d6, 1d4
        </p>

        <h1>Description:</h1>
        <p>
          This is a product description for a generic product from CrowPing
          Games. The box dimensions are 10&quot; by 8&quot; by 4&quot;. This
          game is very fun to play for a wide variety of reasons, including but
          not limited to: card gameplay, adorable minifigures, an epic dice set,
          interactive gameplay, and more!
        </p>

        <button>Add To Your Cart</button>
      </div>
    </section>
  );
};

export default ItemPreviewContent;
