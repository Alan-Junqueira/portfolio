import { GetServerSideProps, GetStaticProps } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// https://react-slideshow-image.netlify.app/?path=/docs/introduction--page

import { Layout } from '../src/components/Layout';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import * as C from '../styles/educacao';
import { AboutMeType } from '../src/types/AboutMe';

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutMe = await fetch(
    `https://portfolio-alan-junqueira.vercel.app/api/about-me`
    // 'http://localhost:3000/api/about-me'
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

const Educacao = ({ aboutMe }: Props) => {
  const { darkMode } = useDarkModeContext();

  return (
    <Layout aboutMe={aboutMe}>
      <C.Container backgroundColor={darkMode ? '#060e26' : '#010B40'}>
        <C.EducationSection color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
          <h2>Escolaridade</h2>
          <ul>
            <li>
              <p>Ensino Médio Completo</p>
            </li>
            <li>
              <p>Curso de Inglês - Uptime (1 ano)</p>
            </li>
            <li>
              <p>Cursos de Programação sem certificação</p>
            </li>
            <li>
              <p>Faculdade na área de TI (Em breve)</p>
            </li>
          </ul>
        </C.EducationSection>
        <C.CertificatesSection color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
          <h2>Certificados</h2>
          <C.Slides>
            <Slide
              slidesToScroll={1}
              slidesToShow={1}
              indicators={true}
              autoplay
              duration={2500}
              transitionDuration={500}
              infinite
            >
              {aboutMe.certificates.map((image, index) => (
                <Image
                  key={index}
                  src={image.banner}
                  width={1080}
                  height={650}
                  alt={image.alt}
                  draggable={false}
                />
              ))}
            </Slide>
          </C.Slides>
        </C.CertificatesSection>
      </C.Container>
    </Layout>
  );
};

export default Educacao;
