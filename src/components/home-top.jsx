import React from "react";
import diceTrayGame from "../images/DiceTrayGame.png";
import "../pages/Home.css";

const HomeTop = () => {
  return (
    <section className="left-flex">
      <div className="flex-item3">
        <a href="/crow-game-store/store">
          <img src={diceTrayGame} alt="300x600" height="600px" width="400px" />
        </a>
        <p>
          Check out the newest expansions <b>here!</b>
        </p>
      </div>
    </section>
  );
};

export default HomeTop;
