import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar">
      {/* <img> My name turned into a logo </img> */}
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
    </nav>
  );
}

export default Navbar;