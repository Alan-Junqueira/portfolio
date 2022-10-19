import React from 'react';
import * as C from './styled';

import { TechnologiesCard } from '../TechnologiesCard';
import { Button } from '../Button';
import { IdiomsCard } from '../IdiomsCard';
import { SocialInfo } from '../SocialInfo';
import { SocialLink } from '../SocialLink';
import { languages } from '../../libs/Languages';
import { IdiomsDomain } from '../../libs/IdiomsDomain';

import Image from 'next/image';
import { AboutMe } from '../../libs/AboutMe';

type Props = {
  darkMode: boolean;
};

export const Aside = ({ darkMode }: Props) => {
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
              priority
            />
          </div>
        </C.ContainerPerfil>
        <h3>Alan Junqueira</h3>
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
        {AboutMe.map((about, index) => (
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
          {IdiomsDomain.map((idiom, index) => (
            <IdiomsCard
              key={index}
              backgroundColor="#04BF68"
              textColor={darkMode ? '#060E26' : '#FCFDFF'}
              percentage={idiom.domain}
              percentageColor="#F23827"
              language={idiom.label}
            />
          ))}
        </C.IdomsCards>
      </C.Idioms>

      <C.Line />

      <C.Technologies color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
        <h2>Tecnologias</h2>

        <C.TechnologiesPercentage>
          {languages.map((language, index) => (
            <TechnologiesCard
              key={index}
              textColor={darkMode ? '#C5C6C7' : '#FCFDFF'}
              percentage={language.domain}
              percentageColor={language.mainColor}
              technology={language.label}
            />
          ))}
        </C.TechnologiesPercentage>

        <C.VirtualCurriculum backgroundColor={darkMode ? '#060E26' : '#010B40'}>
          <Button
            backgroundColor="#F23827"
            color="#010B40"
            label="Download CV"
          />
        </C.VirtualCurriculum>
      </C.Technologies>
    </C.Container>
  );
};
