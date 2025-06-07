import ProjectCard from '../Components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website (HTML/CSS)',
      description: 'My first hand-coded portfolio website built with HTML, CSS, and vanilla JS.',
      link: 'https://github.com/KacperProg/New_Portfolio_Website',
    },
    {
      title: 'New React Portfolio (WIP)',
      description: 'This current site, rebuilt using React and Vite.',
      link: '#',
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
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