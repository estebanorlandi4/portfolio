import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiGlobe } from 'react-icons/bi';
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
          <Project key={name} bgPos={styles.bgPos}>
            <motion.img loading="lazy" src={styles.bg} alt={name} />

            <div className="info">
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
              <div className="top">
                <h3>{name}</h3>

                <URLs>
                  {url && (
                    <URL href={url} target="_blank" rel="noreferrer">
                      <BiGlobe size={20} /> Web
                    </URL>
                  )}

                  {github && (
                    <URL href={github} target="_blank" rel="noreferrer">
                      <BsGithub size={20} /> GitHub
                    </URL>
                  )}
                </URLs>
              </div>
            </div>
          </Project>
        ))}
      </Container>
    </Section>
  );
}

export default Projects;
