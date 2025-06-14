import { links } from '../data/links';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// styling added in elements for now and later moved to CSS. Easier for structuring CSS file later

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}> 
      <h1>Hi, I'm Kacper Nowak 👋</h1>
      <p>I'm 24 and I'm working on React right now!</p>
      <div style={{ marginTop: '2rem' }}>
        <a
          href={links.linkedin}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security protocol, best practice 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#333', 
            color: '#fff',
            borderRadius: '5px',
          }} 
        >
          <FaLinkedin/>
          LinkedIn
        </a>

        <a
          href={links.github}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security protocol, best practice 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#333', 
            color: '#fff',
            borderRadius: '5px',
          }} 
        >
          <FaGithub/>
          GitHub
        </a>
      </div>
      <h2>About me</h2>
      <h3>I'm currently living in abc up-skilling by re-learning React</h3>
    </div>
  );
}

export default Home;