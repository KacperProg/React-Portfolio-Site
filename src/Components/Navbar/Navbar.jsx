import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      {/* <img> My name turned into a logo </img> */}
      <h2 style={{ display: 'inline-block', marginRight: '2rem' }}>Kacper Nowak</h2>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
      <Link to="/skills" style={{ marginRight: '2rem' }}>Skills</Link>
      <div style={{ display: 'inline-block', marginRight: '2rem', textAlign: 'center' }}>
        <h3>Email me</h3>
        <p>kacper.nowak20@outlook.com</p>
      </div>
      <div style={{ display: 'inline-block', marginRight: '2rem', textAlign: 'center' }}>
        <h3>Call me</h3>
        <p>+447487646300</p>
      </div>
    </nav>
  );
}

export default Navbar;