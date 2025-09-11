function ProjectCard({ title, description, image, link }) {
  return (
    <div 
      style={{
        border: '1px solid #ddd', 
        borderRadius: '10px', 
        padding: '1rem', 
        marginBottom: '1rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={`${title || 'Project'} screenshot`} style={{ display:'flex', maxWidth: '50%' }} />}

      {/*&& is an "if provided" statement if image variable is missing 
      || is a logical OR for error handling if Project title is missing*/}

      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;