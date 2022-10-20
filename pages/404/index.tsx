import Head from 'next/head';
import React from 'react';
import { Aside } from '../../components/Aside';
import { AsideNav } from '../../components/AsideNav';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/partials/Footer';
import { useDarkModeContext } from '../../contexts/DarkMode';
import * as C from './styled';

const NotFound = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();

  return (
    <>
      <Head>
        <title>404 | Alan Junqueira</title>
      </Head>

      <C.Container>
        <AsideNav />
        <Aside />

        <NavBar />
        <h1>Erro 404 - Página não encontrada</h1>
        <Footer />
      </C.Container>
    </>
  );
};

export default NotFound;
