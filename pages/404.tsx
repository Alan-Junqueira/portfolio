import Head from 'next/head';
import React from 'react';
import { Aside } from '../components/Aside';
import { AsideNav } from '../components/AsideNav';
import { Layout } from '../components/Layout';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/partials/Footer';
import { useDarkModeContext } from '../contexts/DarkMode';
import * as C from '../styles/404';

const NotFound = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();

  return (
    <>
      <Head>
        <title>404 | Alan Junqueira</title>
      </Head>

      <Layout>
        <C.Container>
          <h1>Erro 404 - Página não encontrada</h1>
        </C.Container>
      </Layout>
    </>
  );
};

export default NotFound;
