import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// https://react-slideshow-image.netlify.app/?path=/docs/introduction--page

import { Layout } from '../components/Layout';
import { useDarkModeContext } from '../contexts/DarkMode';
import * as C from '../styles/educacao';
import { Certificate } from '../types/Certificate';

const Educacao = (data: Props) => {
  const { darkMode } = useDarkModeContext();

  const { images } = data;

  return (
    <Layout>
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
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  width={1080}
                  height={650}
                  alt={image.alt}
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

type Props = {
  images: Certificate[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const images = [
    { url: '/assets/certificado-db.jpg', alt: 'Certificado de Banco de Dados' },
    { url: '/assets/certificado-next.jpg', alt: 'Certificado de Next Js' },
    {
      url: '/assets/certificado-typescript.jpg',
      alt: 'Certificado de Typescript'
    },
    { url: '/assets/certificado-react.jpg', alt: 'Certificado de React Js' }
  ];

  return {
    props: {
      images
    }
  };
};
