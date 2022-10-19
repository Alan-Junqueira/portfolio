import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { Button } from '../components/Button';
import { useRouter } from 'next/router';
import { TechnologyCard } from '../components/TechnologyCard';
import { Aside } from '../components/Aside';
import { useState } from 'react';
import { languages } from '../libs/Languages';
import { AsideNav } from '../components/AsideNav';
import { NavBar } from '../components/NavBar';
import { useDarkModeContext } from '../contexts/DarkMode';
import { Footer } from '../components/partials/Footer';

const Home: NextPage = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleSideMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { darkMode, setDarkMode } = useDarkModeContext();

  return (
    <>
      <Head>
        <title>Home | Alan Junqueira</title>
      </Head>
      <AsideNav darkMode={darkMode} setDarkMode={setDarkMode} />

      <div
        className={styles.container}
        style={{ backgroundColor: darkMode ? '#010B40' : '#C5C6C7' }}
      >
        <Aside darkMode={darkMode} />
        <div className={styles.mainContainer}>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main
            className={styles.homeContent}
            style={{ backgroundColor: darkMode ? '#060e26' : '#010B40' }}
          >
            <div className={styles.main}>
              <section className={styles.welcome}>
                <div className={styles.welcomePhrases}>
                  <h2 style={{ color: darkMode ? '#c5c6c7' : '#FCFDFF' }}>
                    Seja bem vindo!!!
                  </h2>
                  <h1 style={{ color: darkMode ? '#c5c6c7' : '#FCFDFF' }}>
                    Sou <strong>Alan Junqueira</strong>
                  </h1>
                  <h3 style={{ color: darkMode ? '#c5c6c7' : '#FCFDFF' }}>
                    Desenvolvedor <strong> Front End</strong>
                  </h3>
                  <p style={{ color: darkMode ? '#c5c6c7' : '#FCFDFF' }}>
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
                    backgroundColor={darkMode ? '#3F3F40' : '#FCFDFF'}
                  />
                ))}
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
