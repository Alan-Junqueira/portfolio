import * as C from '../styles/portfolio';

import React, { ReactNode } from 'react';
import { Layout } from '../src/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { GetServerSideProps } from 'next';
import { AboutMeType } from '../src/types/AboutMe';

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutMe = await fetch(
    `https://portfolio-alan-junqueira.vercel.app//api/about-me`
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

const Portfolio = ({ aboutMe }: Props) => {
  const { darkMode } = useDarkModeContext();

  return (
    <Layout aboutMe={aboutMe}>
      <C.Container
        backgroundColor={darkMode ? '#060E26' : '#010B40'}
        color={darkMode ? '#C5C6C7' : '#FCFDFF'}
      >
        <h1>Portfólio</h1>

        {aboutMe.portfolio.map((portfolio, index) => (
          <C.ImageContainer key={index}>
            <C.ArticleTitle color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
              {portfolio.projectName}
            </C.ArticleTitle>
            <div>
              <Image
                src={portfolio.banner}
                width={21}
                height={9}
                alt={portfolio.projectName}
                layout="responsive"
                priority
              />
            </div>

            <C.ImagesLinks color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
              <Link href={portfolio.ghLink} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Git Hub
                </a>
              </Link>
              <Link href={portfolio.siteLink} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              </Link>
            </C.ImagesLinks>
          </C.ImageContainer>
        ))}
      </C.Container>
    </Layout>
  );
};

export default Portfolio;
