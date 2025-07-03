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
                  {/* add styling/classname here*/}
                  <Icon size={28} /> {/* here*/}
                  <div>
                    <p>{name}</p>
                    <span>{level}</span>{" "}
                    {/* and here to make logos appear next to text*/}
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
                <li key={lang.name}>
                  <img src={lang.flag} alt="lang.name" width="30px" style={{marginRight: "10px"}} />
                   {lang.name} | {lang.level}
                </li>
              ))}
            </ul>
            <h2>Tools</h2>
            <ul>
              {tools.map(({name, logo: Logo}) => (
                <div key={name} className="tools-container">
                  {/* <li key={name}> */}
                    <Logo size={28}/>
                    <p>{name}</p>
                  {/* </li> */}
                </div>
              ))}
              {/* List/Array mapping logic immediately above*/}
            </ul>
          </div>
        </div>
        {/* <h2>Soft Skills</h2>
        <ul>
          {softSkills.map(({skill}) => (
            <li key={skill}>{skill}</li>
          ))} */}
        {/* </ul> */}
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