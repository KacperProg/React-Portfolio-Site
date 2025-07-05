import {progLang, spokenLang, tools, softSkills, certification} from '../data/skills';
import "./Skills.css";

// Skills mapped from dictionaries and lists/arrays created in skills.js for easier updating methodology

function Skills() {
  return (
    <div>
      <div className="main-container">
        <h1 className="title">A Display page of my skills and qualifications!</h1>
        <p>Below find a list of all skills and relevant qualifications</p>
      </div>
        <div className="top-container">
          <div className="left-container">
            <h2>Programming</h2>
            <div className='skills-container'>
              {progLang.map(({ name, level, logo: Icon }) => (
                <div key={name} className="skill-component">
                  <Icon size={28} />
                  <div>
                    <p>{name}</p>
                    <span>{level}</span>{" "}
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
  );
}

export default Skills;