import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const whenScrolling = () => {
      setScrolled(window.scrollY > 50);
    };

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
          <h3>Email me</h3>
          <p>kacper.nowak20@outlook.com</p>
        </div>
        <div className="contact-container">
          <h3>Call me</h3>
          <p>+447487646300</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;