import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// https://react-slideshow-image.netlify.app/?path=/docs/introduction--page

import { Layout } from '../components/Layout';
import { useDarkModeContext } from '../contexts/DarkMode';
import * as C from '../styles/educacao';

const Educacao = () => {
  const { darkMode } = useDarkModeContext();

  const images = [
    { url: '/assets/certificado-db.jpg', alt: 'Certificado de Banco de Dados' },
    { url: '/assets/certificado-next.jpg', alt: 'Certificado de Next Js' },
    {
      url: '/assets/certificado-typescript.jpg',
      alt: 'Certificado de Typescript'
    },
    { url: '/assets/certificado-react.jpg', alt: 'Certificado de React Js' }
  ];

  return (
    <Layout>
      <C.Container backgroundColor={darkMode ? '#060e26' : '#010B40'}>
        <C.CertificatesContainer color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
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
        </C.CertificatesContainer>
      </C.Container>
    </Layout>
  );
};

export default Educacao;
