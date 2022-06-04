import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di';
import {
  SiEslint,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';

export const colors = {
  // Front End
  html5: '#E34F26',
  css3: '#1572b6',
  js: '#f7df1e',
  ts: '#3178c6',
  react: '#61Dafb',
  redux: '#764abc',
  next: '#000000',
  graphql: '#e10098',
  styled: '#db7093',
  socket: '#010101',

  // Back End
  node: '#339933',
  express: '#000000',
  sequelize: '#52B0E7',
  mongodb: '#47A248',
  postgresql: '#4169E1',

  // Tools
  github: '#181717',
  git: '#F05032',
  eslint: '#4B32C3',
  linux: '#FCC624',
  figma: '#a058fd',
};

export const icons = {
  html5: DiHtml5,
  css3: DiCss3,
  js: DiJavascript1,
  ts: SiTypescript,
  react: DiReact,
  redux: SiRedux,
  next: SiNextdotjs,
  graphql: SiGraphql,

  // Back End
  node: SiNodedotjs,
  express: SiExpress,
  sequelize: SiSequelize,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,

  // Tools
  github: SiGithub,
  git: SiGit,
  eslint: SiEslint,
  linux: SiLinux,
  figma: SiFigma,
  styled: SiStyledcomponents,
  socket: SiSocketdotio,
};

export const frontSkills = [
  { name: 'HTML5', icon: icons.html5, color: colors.html5 },
  { name: 'CSS3', icon: icons.css3, color: colors.css3 },
  { name: 'JavaScript', icon: icons.js, color: colors.js },
  { name: 'TypeScript', icon: icons.ts, color: colors.ts },
  { name: 'React', icon: icons.react, color: colors.react },
  { name: 'Redux', icon: icons.redux, color: colors.redux },
  { name: 'Next', icon: icons.next, color: colors.next },
  { name: 'Graphql', icon: icons.graphql, color: colors.graphql },
  { name: 'styled-components', icon: icons.styled, color: colors.styled },
  { name: 'Socket.io', icon: icons.socket, color: colors.socket },
];

export const backSkills = [
  { name: 'Node', icon: icons.node, color: colors.node },
  { name: 'Express', icon: icons.express, color: colors.express },
  { name: 'Sequelize', icon: icons.sequelize, color: colors.sequelize },
  { name: 'MongoDB', icon: icons.mongodb, color: colors.mongodb },
  { name: 'PostgreSQL', icon: icons.postgresql, color: colors.postgresql },
];

export const toolsSkills = [
  { name: 'GitHub', icon: icons.github, color: colors.github },
  { name: 'Git', icon: icons.git, color: colors.git },
  { name: 'Eslint', icon: icons.eslint, color: colors.eslint },
  { name: 'Linux', icon: icons.linux, color: colors.linux },
  { name: 'Figma', icon: icons.figma, color: colors.figma },
];

const difference = 10;

export const skills = {
  front: frontSkills.map((skill) => ({
    ...skill,
    size: /^si/i.test(skill.icon.name) ? difference : 0,
  })),

  back: backSkills.map((skill) => ({
    ...skill,
    size: /^si/i.test(skill.icon.name) ? difference : 0,
  })),

  tools: toolsSkills.map((skill) => ({
    ...skill,
    size: /^si/i.test(skill.icon.name) ? difference : 0,
  })),
};
