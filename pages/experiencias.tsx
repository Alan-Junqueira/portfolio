import React, { ReactNode } from 'react';
import { GetServerSideProps } from 'next';

import * as C from '../styles/experiencias';

import { useDarkModeContext } from '../src/contexts/DarkMode';

import { Layout } from '../src/components/Layout';
import { ExperienceCard } from '../src/components/ExperienceCard';

import { AboutMeType } from '../src/types/AboutMe';

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutMe = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/about-me`
  ).then((res) => res.json());

  return {
    props: {
      aboutMe
    }
  };
};

type Props = {
  children: ReactNode;
  aboutMe: AboutMeType;
};

const Experiencias = ({ aboutMe }: Props) => {
  const { darkMode } = useDarkModeContext();

  return (
    <Layout aboutMe={aboutMe}>
      <C.Container
        backgroundColor={darkMode ? '#060E26' : '#010B40'}
        color={darkMode ? '#C5C6C7' : '#FCFDFF'}
      >
        <h2>Experiências Profissionais</h2>
        {aboutMe.profissionalExperiences.map((experience, index) => (
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
