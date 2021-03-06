import PokemonImage from '../assets/images/PokemonBG.jpg';
import HFoodImage from '../assets/images/HFoodBG.jpg';
import CodeNetImage from '../assets/images/CodeNetBG.jpg';

import { colors, icons } from './skills';

const projects = [
  {
    favorite: true,
    name: 'Missingnodex',
    github: 'https://github.com/estebanorlandi4/Pokemon',
    url: 'https://missingnodex.netlify.app/',
    styles: {
      bg: PokemonImage,
      bgPos: 'center',
      area: '1 / 2 / 3 / 3',
    },
    techs: [
      { label: 'TypeScript', bg: colors.ts, icon: icons.ts },
      { label: 'JavaScript', bg: colors.js, icon: icons.js },
      { label: 'React', bg: colors.react, icon: icons.react },
      { label: 'Redux', bg: colors.redux, icon: icons.redux },
      { label: 'Express', bg: colors.express, icon: icons.express },
      { label: 'MongoDB', bg: colors.mongodb, icon: icons.mongodb },
    ],
  },
  {
    name: 'HFood',
    github: 'https://github.com/estebanorlandi4/HFood',
    url: null,
    styles: {
      bg: HFoodImage,
      bgPos: 'center',
    },
    techs: [
      { label: 'JS', bg: colors.js, icon: icons.js },
      { label: 'React', bg: colors.react, icon: icons.react },
      { label: 'Redux', bg: colors.redux, icon: icons.redux },
      { label: 'Express', bg: colors.express, icon: icons.express },
      { label: 'Sequelize', bg: colors.sequelize, icon: icons.sequelize },
      { label: 'PostgreSQL', bg: colors.postgresql, icon: icons.postgresql },
    ],
  },
  {
    name: 'CodeNet',
    github: 'https://github.com/estebanorlandi4/Red-Social',
    url: null,
    styles: {
      bg: CodeNetImage,
      bgPos: 'center',
    },
    techs: [
      { label: 'JS', bg: colors.js, icon: icons.js },
      { label: 'React', bg: colors.react, icon: icons.react },
      { label: 'Redux', bg: colors.redux, icon: icons.redux },
      { label: 'Express', bg: colors.express, icon: icons.express },
      { label: 'Sequelize', bg: colors.sequelize, icon: icons.sequelize },
      { label: 'PostgreSQL', bg: colors.postgresql, icon: icons.postgresql },
    ],
  },
  {
    name: 'Rick And Morty',
    github: 'https://github.com/estebanorlandi4/RickAndMorty',
    url: 'https://rick-and-morty-blush-ten.vercel.app/',
    styles: {
      bg: PokemonImage,
      bgPos: 'center',
    },
    techs: [
      { label: 'JavaScript', bg: colors.js, icon: icons.js },
      { label: 'Next', bg: colors.next, icon: icons.next },
      { label: 'Graphql', bg: colors.graphql, icon: icons.graphql },
    ],
  },
];

export default projects;
