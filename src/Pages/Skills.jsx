import {progLang, spokenLang, tools, softSkills, certification} from '../data/skills';
import "./Skills.css";

// Skills mapped from dictionaries and lists/arrays created in skills.js for easier updating methodology

function Skills() {
  return (
    <div>
      <div className="main-container">
        <h1 className="title">Welcome to the display of my skills and qualifications!</h1>
        <p style={{margin: "3rem", fontStyle: "italic"}}>As a result of work experience as a Data Analyst, Full-stack Engineer and Physics Graduate, I acquired a vast selection of skills. I applied these in personal projects you may see on the Projects page.</p>
      </div>
        <div className="top-container">
          <div className="left-container">
            <h2>Programming</h2>
            <p>Here are the coding languages I have academic, personal or profesional experience with:</p>
            <div className='skills-container'>
              {progLang.map(({ name, level, logo: Icon  }) => (
                <div 
                  key={name} 
                  className="skill-component" 
                >
                  <Icon 
                    size={38} 
                    style={{marginTop: "1rem"}} 
                    />
                  <div>
                    <p>{name}</p>
                    <p style={{marginTop:"-1rem", fontWeight:"50"}}>{level}</p>
                  </div>
                </div>
                ))}
                {/* Dictionary mapping logic immediately above*/}
              </div>
          </div>
          <div className="right-container">
            <h2>Languages</h2>
            <ul style={{listStyle: "none"}}>
              {spokenLang.map((lang) => (
                <li key={lang.name} className="lang-container">
                  <img src={lang.flag} alt={lang.name} width="30px" style={{marginRight: "10px"}} />
                  <p></p>
                  {lang.name} | {lang.level}
                </li>
              ))}
            </ul>
            <h2>Tools</h2>
            <ul>    
              {tools.map(({name, logo: Logo}) => (
                <div key={name} className="tools-container">
                    <Logo size={28}/>
                    <p>{name}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom-container">
          <div className="soft-skills-container">
            {/* Add logic here to make each skill word appear randomly within the spacing of the container every time you open the page*/}
            <h2>Soft Skills</h2>
            <ul>
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <h2>Certificates</h2>
          <ul>
            {certification.map((name) => (
              <li key={name}>{name} </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default Skills;