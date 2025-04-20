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

      <ContactMe />

      <section>
        <Contact />
      </section>
    </>
  );
};

export default About;
