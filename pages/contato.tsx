import * as C from '../styles/contato';

import React, { ReactNode } from 'react';
import { Layout } from '../src/components/Layout';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { GetServerSideProps } from 'next';
import { AboutMeType } from '../src/types/AboutMe';
import { ReactForm } from '../src/components/ContactForm';
import Head from 'next/head';

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

const Contato = ({ aboutMe }: Props) => {
  const { darkMode } = useDarkModeContext();

  return (
    <>
      <Head>
        <title>Contato | Alan Junqueira</title>
      </Head>
      <Layout aboutMe={aboutMe}>
        <C.Container
          backgroundColor={darkMode ? '#060E26' : '#010B40'}
          color={darkMode ? '#C5C6C7' : '#FCFDFF'}
        >
          <h1>Contato</h1>
          <ReactForm />
        </C.Container>
      </Layout>
    </>
  );
};

export default Contato;

type Inputs = {
  example: string;
  exampleRequired: string;
};
