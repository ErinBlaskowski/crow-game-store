// Home.jsx
import "./Home.css";
import HomeTop from "../components/home-top.jsx";
import HomeBottom from "../components/home-bottom.jsx";

const Home = () => {
  return (
    <main className="main">
      <HomeTop />
      <HomeBottom />
    </main>
  );
};

export default Home;
