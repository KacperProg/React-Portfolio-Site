import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#eee', padding: '1rem' }}>
      <h2 style={{ display: 'inline-block', marginRight: '2rem' }}>My Portfolio</h2>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;