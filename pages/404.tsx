import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Aside } from '../src/components/Aside';
import { AsideNav } from '../src/components/AsideNav';
import { Layout } from '../src/components/Layout';
import { NavBar } from '../src/components/NavBar';
import { Footer } from '../src/components/partials/Footer';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { AboutMeType } from '../src/types/AboutMe';
import * as C from '../styles/404';

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

const NotFound = ({ aboutMe }: Props) => {
  const { darkMode, setDarkMode } = useDarkModeContext();

  return (
    <>
      <Head>
        <title>404 | Alan Junqueira</title>
      </Head>

      <Layout aboutMe={aboutMe}>
        <C.Container>
          <h1>Erro 404 - Página não encontrada</h1>
        </C.Container>
      </Layout>
    </>
  );
};

export default NotFound;
