import React from "react";
import cardGameGroup from "../images/CardGameGroup.png";

const GamesNight = () => {
  return (
    <section className="flexbox box1">
      <img
        src={cardGameGroup}
        height="400px"
        width="270px"
        alt="Card game group"
      />
      <div className="text">
        <h3>Games Night!</h3>
        <p>
          CrowPing Games is delighted to present our first ever weekly game
          night! This week’s game night comes up on February 22nd, 2025. There
          will be sections for board games, TTRPGs, and card games, as well as
          free pizza and drinks. Swing by at 7 P.M. this Saturday to meet the
          CrowPing community and game.
        </p>
      </div>
    </section>
  );
};

export default GamesNight;