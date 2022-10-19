import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { Button } from '../components/Button';
import { LogoSvg } from '../components/Svgs/LogoSvg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TechnologyCard } from '../components/TechnologyCard';
import { DarkModeSwitcher } from '../components/DarkModeSwitcher';
import { Aside } from '../components/Aside';
import { useState } from 'react';
import {
  Briefcase,
  Flask,
  House,
  PaperPlaneTilt,
  Student
} from 'phosphor-react';
import { languages } from '../libs/Languages';
import Idiom from '../components/Idiom';
import { Idioms } from '../libs/Idioms';
import { AsideNav } from '../components/AsideNav';

const Home: NextPage = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleSideMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [darkMode, setDarkMode] = useState(true);

  // Change Language
  const [languagePtActive, setLanguagePtActive] = useState(true);
  const [languageEnActive, setLanguageEnActive] = useState(false);

  const changeLanguateToPt = () => {
    setLanguagePtActive(true);
    setLanguageEnActive(false);
  };

  const changeLanguateToEn = () => {
    setLanguagePtActive(false);
    setLanguageEnActive(true);
  };

  return (
    <>
      <Head>
        <title>Home | Alan Junqueira</title>
      </Head>
      <AsideNav />

      <div
        className={styles.container}
        style={{ backgroundColor: darkMode ? '' : '#C5C6C7' }}
      >
        <Aside darkMode={darkMode} />
        <div className={styles.mainContainer}>
          {menuOpen && (
            <div className={styles.menuModal}>
              <div className={styles.menuNavigationModal}>
                <div className={styles.burgerMenuBackground}></div>
                <div className={styles.changeLanguageBackground}></div>
                <ul>
                  <li>
                    <Link href="/">
                      <House size={32} color={'#04BF68'} />
                    </Link>
                  </li>
                  <li>
                    <Link href={'/experiencias'}>
                      <Flask size={32} color={'#04BF68'} />
                    </Link>
                  </li>
                  <li>
                    <Link href={'/portfolio'}>
                      <Briefcase size={32} color={'#04BF68'} />
                    </Link>
                  </li>
                  <li>
                    <Link href={'/educacao'}>
                      <Student size={32} color={'#04BF68'} />
                    </Link>
                  </li>
                  <li>
                    <Link href={'/contato'}>
                      <PaperPlaneTilt size={32} color={'#04BF68'} />
                    </Link>
                  </li>
                </ul>
                <div className={styles.changleLanguageAndMode}>
                  <div
                    className={styles.switcherModal}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <DarkModeSwitcher />
                  </div>

                  <div className={styles.changeLanguage}>
                    {Idioms.map((idiom, index) => (
                      <Idiom
                        key={index}
                        onClick={
                          idiom.label === 'PT'
                            ? changeLanguateToPt
                            : changeLanguateToEn
                        }
                        backgroundColor={
                          idiom.label === 'PT'
                            ? languagePtActive
                              ? '#04BF68'
                              : '#727273'
                            : languageEnActive
                            ? '#F23827'
                            : '#727273'
                        }
                        color={idiom.color}
                        label={idiom.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          <nav
            className={styles.navbar}
            style={{ backgroundColor: darkMode ? '' : '#010B40' }}
          >
            <LogoSvg color="#F23827" />

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={'/experiencias'}>Experiências</Link>
              </li>
              <li>
                <Link href={'/portfolio'}>Portfólio</Link>
              </li>
              <li>
                <Link href={'/educacao'}>Educação</Link>
              </li>
              <li>
                <Link href={'/contato'}>Contato</Link>
              </li>
            </ul>
            <div onClick={() => setDarkMode(!darkMode)}>
              <DarkModeSwitcher />
            </div>
          </nav>

          <main
            className={styles.homeContent}
            style={{ backgroundColor: darkMode ? '' : '#010B40' }}
          >
            <div className={styles.main}>
              <section className={styles.welcome}>
                <div className={styles.welcomePhrases}>
                  <h2 style={{ color: darkMode ? '' : '#FCFDFF' }}>
                    Seja bem vindo!!!
                  </h2>
                  <h1 style={{ color: darkMode ? '' : '#FCFDFF' }}>
                    Sou <strong>Alan Junqueira</strong>
                  </h1>
                  <h3 style={{ color: darkMode ? '' : '#FCFDFF' }}>
                    Desenvolvedor <strong> Front End</strong>
                  </h3>
                  <p style={{ color: darkMode ? '' : '#FCFDFF' }}>
                    Desenvolvedor Front End React, focado em criar códigos
                    limpos e de fácil manutenção, com atenção aos detalhes
                    passados pelo design para trazer uma melhor experiência para
                    o usuário, página responsiva, código escalavel e funcional.
                  </p>

                  <Button
                    backgroundColor="#F23827"
                    label="Contato"
                    border="#BF0B2C"
                    color="#010B40"
                    image="envelope"
                    height={56}
                    onClick={() => router.push('/contato')}
                  />
                </div>
              </section>
            </div>

            <div className={styles.technologiesMain}>
              <h2>Minhas Habilidades</h2>
              <div className={styles.technologiesCards}>
                {languages.map((language, index) => (
                  <TechnologyCard
                    key={index}
                    label={language.language}
                    color={language.mainColor}
                    backgroundColor={darkMode ? '' : '#FCFDFF'}
                  />
                ))}
              </div>
            </div>
            <footer className={styles.footer}>
              <p>Feito com 💜 por Alan Junqueira</p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
