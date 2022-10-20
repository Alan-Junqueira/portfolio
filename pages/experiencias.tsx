import * as C from '../styles/experiencias';

import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { CaretUp } from 'phosphor-react';
import { useDarkModeContext } from '../contexts/DarkMode';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiences } from '../libs/experiences';

const Experiencias = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <Layout>
      <C.Container backgroundColor={darkMode ? '#060E26' : '#010B40'} color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
        <h2>Experiências Profissionais</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            initialPeriod={experience.initialPeriod}
            endPeriod={experience.endPeriod}
            company={experience.company}
            role={experience.role}
            description={experience.description}
          />
        ))}
      </C.Container>
    </Layout>
  );
};

export default Experiencias;
