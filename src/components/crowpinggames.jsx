import React from "react";
import crowsForWebsite from "../images/CrowsForWebsite.png";

const CrowpingGames = () => {
  return (
    <section className="flexbox box1">
      <img
        src={crowsForWebsite}
        height="650px"
        width="500px"
        alt="What is CrowPing Games?"
      />
      <div className="text">
        <h3>What Is CrowPing Games?</h3>
        <p>
          CrowPing Games is not just an online gaming shop! We cater to those
          online and offline, with cyber deals, event hosting, gaming sessions,
          and a community game shop for all! Our physical store serves to
          connect customers into groups that can game together for years,
          catering especially to TTRPGs such as Dungeons & Dragons. Our digital
          store, on the other hand, provides fantastic prices for new and old
          gamers alike, catering to a broader audience with a wide variety of
          games!
        </p>
      </div>
    </section>
  );
};

export default CrowpingGames;
