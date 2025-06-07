function ProjectCard({ title, description, image, link }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={title} style={{ maxWidth: '100%' }} />}
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;