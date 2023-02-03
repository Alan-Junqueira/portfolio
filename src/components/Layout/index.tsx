import { ReactNode } from 'react';
import { useDarkModeContext } from '../../contexts/DarkMode';
import { AboutMeType } from '../../types/AboutMe';
import { Aside } from '../Aside';
import { AsideNav } from '../AsideNav';
import { NavBar } from '../NavBar';
import { Footer } from '../partials/Footer';
import * as C from './styled';

type LayoutProps = {
  children: ReactNode;
  aboutMe: AboutMeType;
};

export const Layout = ({ children, aboutMe }: LayoutProps) => {
  const { darkMode } = useDarkModeContext();

  return (
    <>
      <Aside aboutMe={aboutMe} />
      <AsideNav />
      <NavBar />

      <C.Container
        backgroundColor={darkMode ? '#010B40' : '#C5C6C7'}
        backgroundMedia1100={darkMode ? '#060E26' : '#010B40'}
      >
        <C.ChildrenDiv>{children}</C.ChildrenDiv>
        <Footer />
      </C.Container>
    </>
  );
};
