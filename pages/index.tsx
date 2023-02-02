import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import styles from '../styles/Home.module.css';
import { Button } from '../src/components/Button';
import { useRouter } from 'next/router';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { Layout } from '../src/components/Layout';
import { ReactNode, useState } from 'react';
import { AboutMeType } from '../src/types/AboutMe';
import { HomeCard } from '../src/components/HomeCard';
import {
  SlideArrowsContainer,
  SliderArrow,
  SliderDot,
  SliderDots,
  SliderHomeContainer
} from '../styles/home';

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15
    },
    breakpoints: {
      '(min-width: 425px)': {
        slides: { perView: 2, spacing: 15 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 15 }
      },
      '(min-width: 1440px)': {
        slides: { perView: 4, spacing: 15 }
      }
    }
  });

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

            <div style={{ position: 'relative' }}>
              <SliderHomeContainer ref={sliderRef} className="keen-slider">
                {aboutMe.programingLanguages.map((language, index) => (
                  <HomeCard
                    key={index}
                    label={language.label}
                    color={language.mainColor}
                    backgroundColor={darkMode ? '#C5C6C7' : '#FCFDFF'}
                    description={language.description}
                    className={`keen-slider__slide`}
                  />
                ))}
              </SliderHomeContainer>
              {loaded && instanceRef.current && (
                <SlideArrowsContainer>
                  <SliderArrow>
                    <AiOutlineArrowLeft
                      size={24}
                      onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                    />
                  </SliderArrow>

                  <SliderArrow>
                    <AiOutlineArrowRight
                      size={24}
                      onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                    />
                  </SliderArrow>
                </SlideArrowsContainer>
              )}
            </div>
            {loaded && instanceRef.current && (
              <SliderDots className="dots">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys()
                ].map((idx) => {
                  return (
                    <SliderDot
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={currentSlide === idx ? 'active' : ''}
                    ></SliderDot>
                  );
                })}
              </SliderDots>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
