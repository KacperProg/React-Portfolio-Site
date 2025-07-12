import { links } from "../data/links";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import facePic from "../images/facePic.png";

// styling added in elements for now and later moved to CSS. Easier for structuring CSS file later

function Home() {

  const heroRight = [
    {
      header: "1 Year",
      text: "Experience as a Data Analyst"
    },
    {
      header: "MPhys Degree",
      text: "from the University of Leeds"
    },
    {
      header: "20",
      text: "Full-Stack projects developed"
    },
    {
      header: "100%",
      text: "Commitment to my work!"
    }
  ];

  return (
    <section className="main-container"> 
      <section className="hero-section">
        <div className="hero-left">
          <h1>Dzień dobry!👋</h1>
          <p>Welcome to my Portfolio website! Enjoy browsing through my past and future projects.</p>
          <p>Important links:</p>
          <div className='buttons-container'>
            <a
              href={links.linkedin}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security protocol, best practice 
              className="link-button"
            >
              <FaLinkedin/>
              LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security protocol, best practice 
              className="link-button" 
            >
              <FaGithub/>
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-right">          
          {heroRight.map((card, index) => (
            <div key={index} className="hero-component">
              {card.header}
              {card.text}
            </div>
          ))}
        </div>
      </section>
      <h2 style={{marginTop:"-6rem"}}>Scroll down to learn more about me!</h2>
      <article>
        <h2>About me</h2>
        <div>
          <p>I'm Kacper, a 24 year old Data Analyst with a degree in Physics and pasion for tech. </p>
          <img src={facePic} alt="This is me!" />
        </div>
        <h2>Hobbies, Intrests and Responsibilities</h2>
        <p></p>
      </article>
    </section>
  );
}

export default Home;