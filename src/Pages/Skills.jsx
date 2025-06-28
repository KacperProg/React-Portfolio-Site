import {progLang, spokenLang, tools, softSkills, certification} from '../data/skills';
import "./Skills.css";

// Skills mapped from dictionaries and lists/arrays created in skills.js for easier updating methodology

function Skills() {
  return (
    <div className="main-container">
      <h1 className="title">A Display page of my skills and qualifications!</h1>
      <p>Below find a list of all skills and relevant qualifications</p>
      <div>
        <h2>Programming</h2>
        <ul>                      {/* fake error*/}
        {progLang.map(({ name, level, logo: Icon }) => (
          <div key={name}>
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
        </ul>
        <h2>Languages</h2>
        <ul>
          {spokenLang.map((lang) => (
            <li key={lang.name}>
              {lang.name} | {lang.level}
            </li>
          ))}
        </ul>
        <h2>Tools</h2>
        <ul>
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
          {/* List/Array mapping logic immediately above*/}
        </ul>
        <h2>Soft Skills</h2>
        <ul>
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h2>Certificates</h2>
        <ul>
          {certification.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;