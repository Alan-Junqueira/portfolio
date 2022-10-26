import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { Button } from '../src/components/Button';
import { useRouter } from 'next/router';
import { TechnologyCard } from '../src/components/TechnologyCard';
import { languages } from '../src/libs/Languages';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { Layout } from '../src/components/Layout';
import { ReactNode } from 'react';
import { AboutMeType } from '../src/types/AboutMe';

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutMe = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/about-me`
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

const Home = ({ aboutMe }: Props) => {
  const router = useRouter();

  const { darkMode } = useDarkModeContext();

  return (
    <>
      <Head>
        <title>Home | {aboutMe.name}</title>
      </Head>

      <Layout aboutMe={aboutMe}>
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
                  Sou <strong>{aboutMe.name}</strong>
                </h1>
                <h3 style={{ color: darkMode ? '#c5c6c7' : '#FCFDFF' }}>
                  Desenvolvedor <strong> Front End</strong>
                </h3>
                <p style={{ color: darkMode ? '#c5c6c7' : '#FCFDFF' }}>
                  Desenvolvedor Front End React, focado em criar códigos limpos
                  e de fácil manutenção, com atenção aos detalhes passados pelo
                  design para trazer uma melhor experiência para o usuário,
                  página responsiva, código escalavel e funcional.
                </p>

                <Button
                  backgroundColor="#F23827"
                  label="Contato"
                  border="#BF0B2C"
                  color="#010B40"
                  image="envelope"
                  height={56}
                  onClick={() => router.push('/contato')}
                  width={200}
                />
              </div>
            </section>
          </div>

          <div className={styles.technologiesMain}>
            <h2>Minhas Habilidades</h2>
            <div className={styles.technologiesCards}>
              {aboutMe.programingLanguages.map((language, index) => (
                <TechnologyCard
                  key={index}
                  label={language.label}
                  color={language.mainColor}
                  backgroundColor={darkMode ? '#3F3F40' : '#FCFDFF'}
                />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
