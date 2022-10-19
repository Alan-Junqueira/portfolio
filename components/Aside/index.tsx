import React from 'react';
import * as C from './styled'

import { TechnologiesCard } from '../TechnologiesCard';
import { Button } from '../Button';
import { IdiomsCard } from '../IdiomsCard';
import { SocialInfo } from '../SocialInfo';
import { SocialLink } from '../SocialLink';
import { languages } from '../../libs/Languages';
import { IdiomsDomain } from '../../libs/IdiomsDomain';

import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
  darkMode: boolean;
};

export const Aside = ({ darkMode }: Props) => {
  return (
    <section
      className={styles.aside}
      style={{ backgroundColor: darkMode ? '' : '#010B40' }}
    >
      <div
        className={styles.perfilFixed}
        style={{ backgroundColor: darkMode ? '' : '#010B40' }}
      >
        <div className={styles.containerPerfil}>
          <Image
            src="/assets/perfil.png"
            alt=""
            width={180}
            height={180}
            className={styles.perfilImg}
          />
        </div>
        <h3>Alan Junqueira</h3>
        <h4 style={{ color: darkMode ? '#C5C6C7' : '#FCFDFF' }}>
          Desenvolvedor Front End
        </h4>

        <div className={styles.socialMedia}>
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
        </div>
      </div>

      <hr />

      <div className={styles.locationArea}>
        <SocialInfo
          backgroundColor="#F23827"
          color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          label="Idade"
          description="27"
          fontSize='12px'
        />

        <SocialInfo
          backgroundColor="#F23827"
          color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          label="Residência"
          description="Brasil"
          fontSize='12px'
        />

        <SocialInfo
          backgroundColor="#F23827"
          color={darkMode ? '#C5C6C7' : '#FCFDFF'}
          label="Cidade"
          description="Caldas Novas /GO"
          fontSize='12px'
        />
      </div>

      <hr />

      <div className={styles.languages}>
        <h2 style={{ color: darkMode ? '#C5C6C7' : '#FCFDFF' }}>Idiomas</h2>
        <div className={styles.languagesCards}>
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
        </div>
      </div>

      <hr />

      <div className={styles.technologies}>
        <h2 style={{ color: darkMode ? '#C5C6C7' : '#FCFDFF' }}>Tecnologias</h2>

        <div className={styles.technologiesPercentage}>
          {languages.map((language, index) => (
            <TechnologiesCard
              key={index}
              textColor={darkMode ? '#C5C6C7' : '#FCFDFF'}
              percentage={language.domain}
              percentageColor={language.mainColor}
              technology={language.label}
            />
          ))}
        </div>

        <div
          className={styles.virtualCurriculum}
          style={{ backgroundColor: darkMode ? '' : '#010B40' }}
        >
          <Button
            backgroundColor="#F23827"
            color="#010B40"
            label="Download CV"
          />
        </div>
      </div>
    </section>
  );
};
