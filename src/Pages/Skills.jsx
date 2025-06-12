import {progLang, spokenLang, tools, softSkills, certification} from '../data/skills';

// Skills mapped from dictionaries and lists/arrays created in skills.js for easier updating methodology

function Skills() {
    return(
        <div style={{ padding: `1rem`}}>
            <h1>Skills</h1>
            <p>Below find a list of all skills and relevant qualifications</p>
            <h2>Programming</h2>
            <ul>
                {progLang.map((lang) => (
                    <li key={lang.name}> {lang.name} | {lang.level}</li>
                ))}

                {/* Dictionary mapping logic immediately above*/}

            </ul>
            <h2>Languages</h2>
            <ul>
                {spokenLang.map((lang) => (
                    <li key={lang.name}>{lang.name} | {lang.level}</li>
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
    );
}

export default Skills;