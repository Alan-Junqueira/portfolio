import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import styles from '../styles/Home.module.css';
import { Button } from '../src/components/Button';
import { useRouter } from 'next/router';
import { TechnologyCard } from '../src/components/TechnologyCard';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { Layout } from '../src/components/Layout';
import { ReactNode, useEffect, useState } from 'react';
import { AboutMeType } from '../src/types/AboutMe';
import { HomeCard } from '../src/components/HomeCard';
import { SlideArrowsContainer, SliderHomeContainer } from '../styles/home';

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

const Home = ({ aboutMe }: Props) => {
  const router = useRouter();

  const { darkMode } = useDarkModeContext();

  // Slides

  const totalSlides = aboutMe.programingLanguages.length;
  const totalSlidesWidth = totalSlides * 300;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [updateSliderMargin, setUpdateSliderMargin] = useState(0);
  console.log(currentSlide);

  function goPrev() {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
      updateMargin(currentSlide - 1);
    } else if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 2);
      updateMargin(totalSlides - 2);
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function goNext() {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide > totalSlides) {
      setCurrentSlide(0);
    }
    let slide = currentSlide + 1;

    if (slide >= totalSlides - 1) {
      setCurrentSlide(0);
      updateMargin(0);
    } else {
      updateMargin(slide);
    }
  }

  function updateMargin(slide: number) {
    let sliderItemWidth = 300;
    let newMargin = slide * sliderItemWidth;

    console.log(newMargin);
    setUpdateSliderMargin(newMargin);
  }

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
            <SlideArrowsContainer>
              <span onClick={goPrev}>
                <AiOutlineArrowLeft size={30} />
              </span>
              <span onClick={goNext}>
                <AiOutlineArrowRight size={30} />
              </span>
            </SlideArrowsContainer>
            <h2>Minhas Habilidades</h2>
            <SliderHomeContainer
              id="slider-container"
              totalSlides={totalSlidesWidth}
              marginLeft={updateSliderMargin}
            >
              {aboutMe.programingLanguages.map((language, index) => (
                <HomeCard
                  key={index}
                  label={language.label}
                  color={language.mainColor}
                  backgroundColor={darkMode ? '#C5C6C7' : '#FCFDFF'}
                  description={language.description}
                />
              ))}
              <HomeCard
                label={aboutMe.programingLanguages[0].label}
                color={aboutMe.programingLanguages[0].mainColor}
                backgroundColor={darkMode ? '#C5C6C7' : '#FCFDFF'}
                description={aboutMe.programingLanguages[0].description}
              />
            </SliderHomeContainer>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
