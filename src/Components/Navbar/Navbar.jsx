import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"; 
import { GoMail } from "react-icons/go";
import { links } from "../../data/links";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const whenScrolling = () => {
      setScrolled(window.scrollY > 50);
    };

    // Scrolling changes 'scrolled' variable which affect 1st line of logic in return statement and changes size of Navbar

    window.addEventListener("scroll", whenScrolling);
    return () => window.removeEventListener("scroll", whenScrolling);
  }, []);

  return (
    <nav className={`navBar ${scrolled ? "navbar-shrink" : ""}`} >
      {/* <img> My name turned into a logo </img> */}
      <div className="navBar-container" >
        <h2 className="name">Kacper Nowak</h2>
        <Link to="/" className="linkBtn">Home</Link>
        <Link to="/projects" className="linkBtn">Projects</Link>
        <Link to="/skills" className="linkBtn">Skills</Link>
        <div className="contact-container">
          <h3>Contact me:</h3>
          <a href={links.mail}>
            <GoMail size={28}/>
          </a>
          <a href={links.linkedin}>
            <FaLinkedin size={28}/>
          </a>
          <a href={links.phone}>
            <FaWhatsapp size={28}/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;