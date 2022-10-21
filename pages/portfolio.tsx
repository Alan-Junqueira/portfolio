import * as C from '../styles/portfolio';

import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkModeContext } from '../contexts/DarkMode';
import { portfolios } from '../libs/portfolio';
import { GetServerSideProps } from 'next';

const Portfolio = (data: Props) => {
  const { darkMode } = useDarkModeContext();

  return (
    <Layout>
      <C.Container
        backgroundColor={darkMode ? '#060E26' : '#010B40'}
        color={darkMode ? '#C5C6C7' : '#FCFDFF'}
      >
        <h1>Portfólio</h1>

        {portfolios.map((portfolio, index) => (
          <C.ImageContainer key={index}>
            <C.ArticleTitle color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
              {portfolio.projectName}
            </C.ArticleTitle>
            <Image
              src={portfolio.banner}
              width={21}
              height={9}
              alt={portfolio.projectName}
              layout="responsive"
            />

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

type Props = {
  portfoliosjson: JSON;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const portfolios = await fetch('https://api.github.com/users/alan-junqueira');
  const portfoliosjson = await portfolios.json();
  const dados = [
    {
      nome: 'Alan Junqueira',
      idade: 27
    }
  ];

  return {
    props: {
      portfoliosjson
    }
  };
};
