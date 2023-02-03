import React, { ReactNode, useState } from 'react';
import { GetServerSideProps } from 'next';

import * as C from '../styles/experiencias';

import { useDarkModeContext } from '../src/contexts/DarkMode';

import { Layout } from '../src/components/Layout';

import { AboutMeType } from '../src/types/AboutMe';
import { ExperiencesAccordion } from '../src/components/ExperiencesAccordion';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutMe = await fetch(
    `https://portfolio-alan-junqueira.vercel.app/api/about-me`
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
  const [expandedActive, setExpandedActive] = useState('panel1');

  const handleAccordionClick = (accordion: string) => {
    if (accordion === expandedActive) {
      setExpandedActive('');
    } else {
      setExpandedActive(accordion);
    }
  };

  return (
    <>
      <Head>
        <title>Experiencias | Alan Junqueira</title>
      </Head>
      <Layout aboutMe={aboutMe}>
        <C.Container
          backgroundColor={darkMode ? '#060E26' : '#010B40'}
          color={darkMode ? '#C5C6C7' : '#FCFDFF'}
        >
          <h2>Experiências Profissionais</h2>
          {aboutMe.profissionalExperiences.map((experience, index) => (
            <ExperiencesAccordion
              key={index}
              initialPeriod={experience.initialPeriod}
              endPeriod={experience.endPeriod}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              panel={`panel${index + 1}`}
              onClick={() => handleAccordionClick(`panel${index + 1}`)}
              expandedActive={expandedActive}
            />
          ))}
        </C.Container>
      </Layout>
    </>
  );
};

export default Experiencias;
