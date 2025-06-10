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
      <h3 style={{color:'grey'}}>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={`${title || 'Project'} screenshot`} style={{ display:'flex', maxWidth: '50%' }} />} 
      {/*&& is an "if provided" statement if image variable is missing 
      maxWidth best practice for responsive design 
      || is a logical OR for error handling if Project title is missing*/}
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;