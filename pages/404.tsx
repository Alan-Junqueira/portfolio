import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Layout } from '../src/components/Layout';
import { AboutMeType } from '../src/types/AboutMe';
import * as C from '../styles/404';

const NotFound = () => {
  const [aboutMeData, setAboutMeData] = useState<AboutMeType>();

  useEffect(() => {
    getAboutMeData();
  }, []);

  const getAboutMeData = async () => {
    const aboutMe = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/api/about-me`
    ).then((res) => res.json());

    setAboutMeData(aboutMe);
  };

  return (
    <>
      <Head>
        <title>404 | Alan Junqueira</title>
      </Head>
      {aboutMeData && (
        <Layout aboutMe={aboutMeData}>
          <C.Container>
            <h1>Erro 404 - Página não encontrada</h1>
          </C.Container>
        </Layout>
      )}
    </>
  );
};

export default NotFound;
