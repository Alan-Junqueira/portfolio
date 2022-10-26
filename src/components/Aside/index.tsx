import React, { useState } from 'react';
import Image from 'next/image';
import * as C from './styled';
import { useDarkModeContext } from '../../contexts/DarkMode';
import { CaretDoubleDown } from 'phosphor-react';

import { TechnologiesCard } from '../TechnologiesCard';
import { Button } from '../Button';
import { IdiomsCard } from '../IdiomsCard';
import { SocialInfo } from '../SocialInfo';
import { SocialLink } from '../SocialLink';

import { IdiomDomain } from '../../types/IdiomsDomain';
import { AboutMeType } from '../../types/AboutMe';
import Link from 'next/link';

type AsideProps = {
  aboutMe: AboutMeType;
};

export const Aside = ({ aboutMe }: AsideProps) => {
  const { darkMode } = useDarkModeContext();

  return (
    <C.Container backgroundColor={darkMode ? '#060E26' : '#010B40'}>
      <C.PerfilFixed backgroundColor={darkMode ? '#060E26' : '#010B40'}>
        <C.ContainerPerfil>
          <div>
            <Image
              src="/assets/perfil.png"
              alt=""
              width={180}
              height={180}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </C.ContainerPerfil>
        <h3>{aboutMe.name}</h3>
        <C.DeveloperFrontEnd
          color={darkMode ? 'rgba(204, 204, 204, 0.5)' : '#FCFDFF'}
        >
          Desenvolvedor Front End
        </C.DeveloperFrontEnd>

        <C.SocialMedia>
          <SocialLink
            icon="instagram"
            color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          />
          <SocialLink
            icon="facebook"
            color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          />
          <SocialLink
            icon="linkedin"
            color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          />
          <SocialLink icon="twitter" color={darkMode ? '#C5C6C7' : '#FCFDFF'} />
          <SocialLink
            icon="whatsapp"
            color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          />
        </C.SocialMedia>
      </C.PerfilFixed>

      <C.Line />

      <C.AboutMeArea>
        {aboutMe.informatinsAboutMe.map((about, index) => (
          <SocialInfo
            key={index}
            backgroundColor="#F23827"
            color={darkMode ? '#C5C6C7' : '#FCFDFF'}
            label={about.label}
            description={about.description}
            fontSize="12px"
          />
        ))}
      </C.AboutMeArea>

      <C.Line />

      <C.Idioms color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
        <h2>Idiomas</h2>
        <C.IdomsCards>
          {aboutMe.idiomsDomain.map((idiom, index) => (
            <IdiomsCard
              key={index}
              backgroundColor="#04BF68"
              textColor={darkMode ? '#060E26' : '#FCFDFF'}
              percentage={idiom.domain}
              percentageColor="#F23827"
              language={idiom.idiom}
            />
          ))}
        </C.IdomsCards>
      </C.Idioms>

      <C.Line />

      <C.Technologies color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
        <h2>Tecnologias</h2>

        <C.TechnologiesPercentage>
          {aboutMe.programingLanguages.map((language, index) => (
            <TechnologiesCard
              key={index}
              textColor={darkMode ? '#C5C6C7' : '#FCFDFF'}
              percentage={language.domain}
              percentageColor={language.mainColor}
              technology={language.label}
            />
          ))}
        </C.TechnologiesPercentage>

        <C.ArrowDown>
          <CaretDoubleDown size={32} color="#C5C6C7" />
        </C.ArrowDown>

        <C.VirtualCurriculum backgroundColor={darkMode ? '#060E26' : '#010B40'}>
          <Link
            href={
              'https://drive.google.com/file/d/19w0k_S6aupTOMIjOBUJWboo0mwWun6Dr/view?usp=sharing'
            }
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <Button
                backgroundColor="#F23827"
                color="#010B40"
                label="Download CV"
                width={200}
              />
            </a>
          </Link>
        </C.VirtualCurriculum>
      </C.Technologies>
    </C.Container>
  );
};
