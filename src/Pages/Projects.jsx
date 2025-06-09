import ProjectCard from '../Components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website (HTML/CSS)',
      description: 'My first hand-coded portfolio website built with HTML, CSS, and vanilla JS.',
      link: 'https://github.com/KacperProg/New_Portfolio_Website',
    },
    {
      title: 'New React Portfolio',
      description: 'This current site, rebuilt using React and Vite.',
      link: 'https://github.com/KacperProg/React-Portfolio-Site',
    },
  ];

  return (
    <div>
      <h1>My Projects</h1> 
      
      {/* mapping (for loop) allowing me to expand how many projects 
      I list in this section based on contents of projects variable */}

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;