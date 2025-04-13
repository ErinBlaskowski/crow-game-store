import React from "react";
import meetTheTeam from "../images/MeetTheTeam.png";

const MeetTheTeam = () => {
  return (
    <section className="flexbox box2">
      <img
        src={meetTheTeam}
        height="650px"
        width="500px"
        alt="Meet the team"
      />
      <div className="text">
        <h3>Meet The Team</h3>
        <p>
          Our talented staff includes the site manager, Erin Blaskowski, as
          well as our on-site employees, Lilith Hardwick and Martin Nguyen. Erin
          is an avid player of all board games, and Lilith and Erin play
          Dungeons & Dragons together at the shop from time to time, hosting
          events for those looking to play. Martin primarily manages inventory,
          but is always happy to discuss the best strategies for board games.
        </p>
      </div>
    </section>
  );
};

export default MeetTheTeam;
