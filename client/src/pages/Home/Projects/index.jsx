import { BiGlobe } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

import { Section, SectionHeader } from '../../../components/Styled';

import PokemonImage from '../../../assets/images/PokemonBG.jpg';
import HFoodImage from '../../../assets/images/HFoodBG.jpg';
import CodeNetImage from '../../../assets/images/CodeNetBG.jpg';

import { Container, Project, URL, URLs } from './styled';

const projects = [
  {
    name: 'Missingnodex',
    github: 'https://github.com/estebanorlandi4/Pokemon',
    url: 'https://missingnodex.netlify.app/',
    styles: {
      bg: PokemonImage,
      bgPos: 'center',
      area: '1 / 2 / 3 / 3',
    },
  },
  {
    name: 'HFood',
    github: 'https://github.com/estebanorlandi4/HFood',
    url: null,
    styles: {
      bg: HFoodImage,
      bgPos: 'center',
      area: '1 / 1 / 2 / 2',
    },
  },
  {
    name: 'CodeNet',
    github: 'https://github.com/estebanorlandi4/Red-Social',
    url: null,
    styles: {
      bg: CodeNetImage,
      bgPos: 'center',
      area: '2 / 1 / 3 / 2',
    },
  },
];

function Projects() {
  return (
    <Section>
      <SectionHeader>Proyectos</SectionHeader>
      <Container>
        {projects.map(({ name, github, url, styles }) => (
          <Project
            key={name}
            bg={styles.bg}
            bgPos={styles.bgPos}
            area={styles.area}
          >
            <div>
              <h3>{name}</h3>

              <URLs>
                {url && (
                  <URL href={url} target="_blank" rel="noreferrer">
                    <BiGlobe size={14} /> Web
                  </URL>
                )}

                {github && (
                  <URL href={github} target="_blank" rel="noreferrer">
                    <BsGithub size={14} /> GitHub
                  </URL>
                )}
              </URLs>
            </div>
          </Project>
        ))}
      </Container>
    </Section>
  );
}

export default Projects;
