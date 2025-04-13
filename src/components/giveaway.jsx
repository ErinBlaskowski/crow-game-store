import React from "react";
import diceGames from "../images/DiceGames.jpeg";

const Giveaway = () => {
  return (
    <section className="flexbox box2">
      <div className="text">
        <h3>TTRPG Giveaway</h3>
        <p>
          With the economy we live in, not everyone can afford the games we list
          here, even with our excellent deals. This is why CrowPing Games is
          implementing a monthly TTRPG Giveaway, where we provide a free dice
          set, card set, or TTRPG book to a loyal customer on our CrowVIP list!
          Sign up today for a 10% discount on all store items and event bookings
          as well as a chance to win this month’s TTRPG Giveaway!
        </p>
      </div>
      <img
        src={diceGames}
        height="500px"
        width="500px"
        alt="Dice game promo"
      />
    </section>
  );
};

export default Giveaway;
