import ProjectCard from "../Components/ProjectCard";
import homeImg from "../images/websiteHome.png";
import thisWebsite from "../images/thisWebsite.png";
import eigenvalues from "../images/eigenvalues.png";
import mainResults from "../images/mainResults.png";
import HeatMapPlot from "../images/HeatMapPlot.png";
import JaccardIndecies from "../images/JaccardIndecies.png";
import "./Projects.css";


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
      image: thisWebsite
    }
  ]

  return (
    <div>
      <h1 className='projects-title' >My Projects</h1> 
      <p style={{display: 'block', padding: '5rem', marginBottom: '-8rem', textAlign: 'center'}} >A partial collection of my personal and professional projects :)</p>
      
      <div className='physics-containers'>
        
        {/* Section to describe my final year project. Different to other ProjectCards as this will have double width
        and be highlighted at the top of the page. Remaining projects will display below. */}
        <div className='physics-nested-containers'>
          <h2>My Final Year Physics project</h2>
          
          <p>This project was part of my University dissertation. I used advanced MATLAB code to analyse the topology of T-Cells. </p>
          <p style={{marginTop: '-0.5rem'}}>Using linear algebra and Principal Component Analysis, I was able to define topological structures on the surface of a T-Cell where membrane protein used in the Auto-Immune response reside.</p>
          <p style={{marginTop: '-0.5rem'}}>Understanding the membrane proteins is essential for uncovering the causes for conditions such as the Auto-Immune Disease</p>
          
          <div className="physics-grid">
            <img src={eigenvalues} alt="Eigenvalues" className="physics-img" />
            <img src={mainResults} alt="Main Results" className="physics-img" />
            <img src={HeatMapPlot} alt="Heat Map" className="physics-img" />
            <img src={JaccardIndecies} alt="Jaccard Indices" className="physics-img" />
          </div>

        </div>
      </div>

      {/* mapping (for loop) allowing me to expand how many projects 
      I list in this section based on contents of projects variable */}

      <h2 className='computing-containers'>My Computing Projects</h2> 
      {projects.map((project, index) => (
        <div className='computing-img'>
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;