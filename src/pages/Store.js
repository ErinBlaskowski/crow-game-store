import "./Store.css";

import monolopy from "../images/Monopoly.png";
import diceSet from "../images/DiceSet.png";
import dominos from "../images/Dominos.png";
import funkyChessSet from "../images/FunkyChessSet.png";
import medievalChessSet from "../images/MedievalChessSet.png";
import virtualHeadset from "../images/VirtualHeadset.png";
import redDiceSet from "../images/RedDiceSet.png";
import bicycleCardSet from "../images/BicycleCardSet.png";
import setOfEightPuzzles from "../images/SetOfEightPuzzles.jpeg";

import {useState} from "react";
import {useEffect} from "react";
import axios from "react";

const Store = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
            "http://localhost:3001/api/products-json/"
            );
        setProducts(response.data);
        })();
    }, []);

    return (
        <>
            <main class="main">
                <h1>THE BEST GAMES AT THE BEST PRICES!</h1>

                <section class="columns">
                    <div class="column1">
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={bicycleCardSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Standard Card Set - $6.99</h3>
                        </section>
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={diceSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>White Dice Set - $13.99</h3>
                        </section>
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={dominos} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Dominos - $15.99</h3>
                        </section>
                    </div>
                    <div class="column2">
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={funkyChessSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Layered Chess Set - $44.99</h3>
                        </section>
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={medievalChessSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Medieval Chess Set - $49.99</h3>
                        </section>
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={redDiceSet} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Red Dice Set - $13.99</h3>
                        </section>
                    </div>
                    <div class="column3">
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={setOfEightPuzzles} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Set of 8 Puzzles - $25.99</h3>
                        </section>
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={virtualHeadset} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>VR Headset - $199.99</h3>
                        </section>
                        <section id="box">
                            <a href="/gameStore/game-store/itemPreview"><img src={monolopy} height="150px" width="200px" alt="200x50"></img></a>
                            <h3>Monopoly - $24.99</h3>
                        </section>
                    </div>
                </section>
            </main>
            {/* Not currently implemented: <script src="storeScript.js"></script> */}

        </>
    )
};

export default Store;