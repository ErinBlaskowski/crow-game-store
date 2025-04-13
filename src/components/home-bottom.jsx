import React from "react";
import diceSet from "../images/DiceSet.png";
import dominos from "../images/Dominos.png";
import funkyChessSet from "../images/FunkyChessSet.png";
import setOfEightPuzzles from "../images/SetOfEightPuzzles.jpeg";
import "../pages/Home.css";

const HomeBottom = () => {
  return (
    <>
      <h1>Popular Items!</h1>
      <section className="mid-flex">
        <div className="flex-item">
          <section className="box">
            <a href="/crow-game-store/store">
              <img src={diceSet} height="150px" width="200px" alt="200x50" />
            </a>
            <h3>White Dice Set - $13.99</h3>
          </section>
        </div>
        <div className="flex-item">
          <section className="box">
            <a href="/crow-game-store/store">
              <img src={dominos} height="150px" width="200px" alt="200x50" />
            </a>
            <h3>Dominos - $15.99</h3>
          </section>
        </div>
        <div className="flex-item2">
          <section className="box">
            <a href="/crow-game-store/store">
              <img
                src={funkyChessSet}
                height="150px"
                width="200px"
                alt="200x50"
              />
            </a>
            <h3>Layered Chess Set - $44.99</h3>
          </section>
        </div>
        <div className="flex-item2">
          <section className="box">
            <a href="/crow-game-store/store">
              <img
                src={setOfEightPuzzles}
                height="150px"
                width="200px"
                alt="200x50"
              />
            </a>
            <h3>Set of 8 Puzzles - $25.99</h3>
          </section>
        </div>
      </section>
    </>
  );
};

export default HomeBottom;
