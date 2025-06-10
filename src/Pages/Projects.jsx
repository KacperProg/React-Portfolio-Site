import ProjectCard from '../Components/ProjectCard';
import homeImg from '../images/websiteHome.png';
import eigenvalues from '../images/eigenvalues.png';
import mainResults from '../images/mainResults.png';



function Projects() {
  const projects = [
    {
      title: 'Portfolio Website (HTML/CSS)',
      description: 'My first hand-coded portfolio website built with HTML, CSS, and vanilla JS.',
      link: 'https://github.com/KacperProg/New_Portfolio_Website',
      image: homeImg
    },
    {
      title: 'New React Portfolio',
      description: 'This current site, constructed using React and Vite.',
      link: 'https://github.com/KacperProg/React-Portfolio-Site',
    },
  ]

  return (
    <div>
      <div style={{
        border: '1px solid #ddd', 
        borderRadius: '10px', 
        padding: '1rem', 
        marginBottom: '1rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'}}
        >
        <h1>My Projects</h1> 
        {/* Section to describe my final year project. Different to other ProjectCards as this will have double width
        and be highlighted at the top of the page. Remaining projects will display below. */}
        <h2>My Final Year Physics project</h2>
        <p>This project was part of my dissertation. I used advanced MATLAB code to analyse the topology of T-Cells.</p>
        <div > 
          {/* Div in the future use as container to display images in a row/in line in which case the style from img will be removed*/}
          <img src={eigenvalues} style={{ display:'inline-flex', maxWidth: '50%' }}></img>
          <img src={mainResults} style={{ display:'inline-flex', maxWidth: '50%' }}></img>
        </div>
      </div>
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