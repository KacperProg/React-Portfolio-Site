import React from "react";
import { SiReact, SiJavascript, SiPython, SiHtml5, SiCss3, SiPostgresql, SiGit } from "react-icons/si";

export const progLang = [
    {name: 'JavaScript', level: 'Familiar', logo: SiJavascript},
    {name: 'React', level: 'Familiar', logo: SiReact},
    {name: 'HTML5', level: 'Familiar', logo: SiHtml5},
    {name: 'CSS3', level: 'Familiar', logo: SiCss3},
    {name: 'Java', level: 'Familiar', logo:SiCss3}, // find and add logo for Java from online
    {name: 'PostgreSQL', level: 'Familiar', logo: SiPostgresql},
    {name: 'Python', level: 'Intermediate', logo: SiPython},
    {name: 'MATLAB', level: 'Intermediate', logo:SiCss3}, // find and add logo for MATLAB from online
    {name: 'Git', level: 'Proficient', logo: SiGit}
];

export const spokenLang = [
    {name: 'English', level: 'Native (C1)'},
    {name: 'Polish', level: 'Native (C1)'},
    {name: 'Portuguese', level: 'Intermediate (B2)'}
];

export const softSkills =[
    'Adaptability',
    'Analytical Skills',
    'Customer Service',
    'Confidence',
    'Creativity',
    'Teamwork',
    'Technical Proficiency'
];

export const tools = [
    'Git & GitHub',
    'VS Code',
    'MS365',
    'Postman',
    'Spring Boot'
];

export const certification = [
    'Code Institute Bootcamp - Web Development',
    'Bright Network - Full-Stack Engineering Bootcamp'
];