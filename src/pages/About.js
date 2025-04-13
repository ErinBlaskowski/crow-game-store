import "./About.css";
import CrowpingGames from "../components/crowpinggames.jsx";
import MeetTheTeam from "../components/meet-the-team.jsx";
import ContactMe from "../components/contact-me.jsx";
import Contact from "../components/contact.jsx";

const About = () => {
  return (
    <>
      <main className="main">
        <CrowpingGames />
        <MeetTheTeam />
      </main>

      {/* iframe not implemented yet
      <iframe id="iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BgvHNlgmKro?si=sX8OzWESY8ovoN__"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      */}

      <ContactMe />

      <section>
        <Contact />
      </section>
    </>
  );
};

export default About;
