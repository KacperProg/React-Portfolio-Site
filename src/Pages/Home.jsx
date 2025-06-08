import { links } from '../data/links';

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
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#0A66C2',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          LinkedIn
        </a>

        <a
          href={links.github}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security protocol, best practice 
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#333', 
            color: '#fff',
            borderRadius: '5px',
          }} 
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Home;