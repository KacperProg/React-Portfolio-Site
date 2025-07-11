import { links } from "../data/links";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import facePic from "../images/facePic.png";

// styling added in elements for now and later moved to CSS. Easier for structuring CSS file later

function Home() {
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
          <img src={facePic} alt="This is me!" />
        </div>
      </section>
      <h2 style={{marginTop:"-6rem"}}>Scroll down to learn more about me!</h2>
      <article>
        <h2>About me</h2>
        <h3>I'm currently living in abc up-skilling by re-learning React</h3>
        <p style={{paddingTop:"500px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid perspiciatis labore, sed ea inventore provident esse sequi voluptatibus mollitia officia, pariatur sit explicabo amet quos, iusto quis dolor. Aliquam?</p>
        {/* Text added to allow scrolling down on page for putting together size changing Navbar feature */}
      </article>
    </section>
  );
}

export default Home;