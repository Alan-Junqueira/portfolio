import * as C from '../styles/contato';

import { useForm, SubmitHandler } from 'react-hook-form';

import React, { ReactNode } from 'react';
import { Layout } from '../src/components/Layout';
import { useDarkModeContext } from '../src/contexts/DarkMode';
import { GetServerSideProps } from 'next';
import { AboutMeType } from '../src/types/AboutMe';
import { ReactForm } from '../src/components/ContactForm';

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

const Contato = ({ aboutMe }: Props) => {
  const { darkMode } = useDarkModeContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Layout aboutMe={aboutMe}>
      <C.Container
        backgroundColor={darkMode ? '#060E26' : '#010B40'}
        color={darkMode ? '#C5C6C7' : '#FCFDFF'}
      >
        <h1>Contato</h1>
        <ReactForm />
      </C.Container>
    </Layout>
  );
};

export default Contato;

type Inputs = {
  example: string;
  exampleRequired: string;
};
