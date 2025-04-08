
import "./Home.css";
import diceSet from "../images/DiceSet.png";
import diceTrayGame from "../images/DiceTrayGame.png";
import dominos from "../images/Dominos.png";
import funkyChessSet from "../images/FunkyChessSet.png";
import setOfEightPuzzles from "../images/SetOfEightPuzzles.jpeg";

const Home = () => {
    {/*
        const [menuUopen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        }

        in return in main nav:

        <button>Menu</button>
        
        */}

  return (
    <>

        <main class="main">
            <section class="left-flex">
                <div class="flex-item3">
                    <a href="/gameStore/game-store/store"><img src={diceTrayGame} alt="300x600" height="600px" width="400"></img></a>
                    <p>Check out the newest expansions <b>here!</b></p>
                </div>
            </section>
            <h1>Popular Items!</h1>
            <section class="mid-flex">
                <div class="flex-item">
                    <section class="box">
                        <a href="/gameStore/game-store/store"><img src={diceSet} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>White Dice Set - $13.99</h3>
                    </section>
                </div>
                <div class="flex-item">
                    <section class="box">
                        <a href="/gameStore/game-store/store"><img src={dominos} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>Dominos - $15.99</h3>
                    </section>
                </div>
                <div class="flex-item2">
                    <section class="box">
                        <a href="/gameStore/game-store/store"><img src={funkyChessSet} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>Layered Chess Set - $44.99</h3>
                    </section>
                </div>
                <div class="flex-item2">
                    <section class="box">
                        <a href="/gameStore/game-store/store"><img src={setOfEightPuzzles} height="150px" width="200px" alt="200x50"></img></a>
                        <h3>Set of 8 Puzzles - $25.99</h3>
                    </section>
                </div>
            </section>
        </main>
    </>
  )
};

export default Home;