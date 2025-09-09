import React from "react";
import { SiReact, SiJavascript, SiPython, SiHtml5, SiCss3, SiPostgresql, SiGit, SiPostman, SiSpringboot, SiSpyderide } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

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
    {name: 'English', level: 'Native (C1)', flag: 'https://flagcdn.com/192x144/gb.png'},
    {name: 'Polish', level: 'Native (C1)', flag: 'https://flagcdn.com/192x144/pl.png'},
    {name: 'Portuguese', level: 'Beginner (A1)', flag: 'https://flagcdn.com/192x144/pt.png'}
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
    {name: 'VS Code', logo: VscVscode},
    {name: 'Spyder (Python)', logo: SiSpyderide},
    {name: 'MS Excel', logo: RiFileExcel2Line},
    {name: 'Postman', logo: SiPostman},
    {name: 'Spring Boot', logo: SiSpringboot}
];

export const certification = [
    'Bright Network - Full-Stack Engineering Bootcamp',
    'Google Data Analytics Professional Certificate',
    'LinkedIn Learning Microsoft Azure Beginners (Work in progress!)'
];