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

  const hobbiesBoxes = [
    {
      name: "Football",
      desc: "Captained the Physics Football Team"
    },
    {
      name: "Local Polish Church",
      desc: "Maintenance, Cleaning and General help in the community"
    },
    {
      name: "Video Games",
      desc: "Semi-pro level on Fifa"
    }
  ];

  return (
    <section className="main-container"> 
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="title-text">Welcome to my portfolio website!👋</h1>
          <p className="body-text"> My name is Kacper Nowak and I hope you enjoy browsing through this project. Here you may find my personal projects, learn more about me or use the relevant links to find me on various platforms!</p>
          <h2>Learn more about me by scrolling down or browse my LinekdIn/GitHub:</h2>

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
              <h4 style={{fontFamily:"sans-serif", fontSize: "22px", fontStyle:"italic"}}>{card.header}</h4>
              <p style={{fontSize: "14px"}}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <h2 style={{marginTop:"-6rem"}}>Scroll down to learn more about me!</h2> */}
      <article>
        <h2 style={{fontSize: "34px"}}>About me</h2>
        <div className="aboutme-container">
          <p style={{padding:"6rem"}}>I'm Kacper, a 24 year old Data Analyst with a degree in Physics and pasion for tech. Having graduated in 2023 I wanted a break from Physics and wanted to complete a transition to a coding role but wasn't able to find a way into it. Eventually I found a role in Data Analysis which I fell in love with. </p>
          <img src={facePic} alt="This is me!" />
        </div>
        <h2>Hobbies, Intrests and Responsibilities</h2>
        <div className="hobbies-container">          
          {hobbiesBoxes.map((hobby, index) => (
            <div key={index} className="hobby-component">
              <h4>{hobby.name}</h4>
              <p>{hobby.desc}</p>
            </div>
          ))}
        </div>      
      </article>
    </section>
  );
}

export default Home;