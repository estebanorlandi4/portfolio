import { BiGlobe, BiHeart } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

import { Section, SectionHeader } from '../../../components/Styled';
import Toast from '../../../components/Toast';
import projects from '../../../utils/projects';

import { Container, Project, Tech, Techs, URL, URLs } from './styled';

function Projects() {
  return (
    <Section>
      <SectionHeader>Proyectos</SectionHeader>
      <Container>
        {projects.map(({ name, github, techs, url, styles }) => (
          <Project
            key={name}
            bg={styles.bg}
            bgPos={styles.bgPos}
            area={styles.area}
          >
            {techs && techs.length && (
              <Techs>
                {techs.map((tech) => {
                  const Icon = tech.icon || null;
                  return (
                    <Tech
                      key={tech.label + new Date().getTime().toString()}
                      bg={tech.bg}
                    >
                      <Toast direction="bottom" className="toast">
                        {tech.label}
                      </Toast>
                      {Icon && <Icon />}
                    </Tech>
                  );
                })}
              </Techs>
            )}
            <div>
              <h3>{name}</h3>

              <URLs>
                {url && (
                  <URL href={url} target="_blank" rel="noreferrer">
                    <BiGlobe size={20} />
                  </URL>
                )}

                {github && (
                  <URL href={github} target="_blank" rel="noreferrer">
                    <BsGithub size={20} />
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
