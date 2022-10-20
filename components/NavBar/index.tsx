import React, { useState } from 'react';
import * as C from './styled';

import { LogoSvg } from '../Svgs/LogoSvg';
import Link from 'next/link';
import { DarkModeSwitcher } from '../DarkModeSwitcher';
import { paths } from '../../libs/paths';
import { useDarkModeContext } from '../../contexts/DarkMode';

export const NavBar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <C.Container
      backgroundColor={darkMode ? '#060e26' : '#010B40'}
      textColor={darkMode ? 'rgba(4, 191, 104, 0.8)' : '#04bf68'}
      hoverColor={darkMode ? '#04bf68' : 'rgba(4, 191, 104, 0.8)'}
    >
      <LogoSvg color="#F23827" />

      <ul>
        {paths.map((path, index) => (
          <li key={index}>
            <Link href={path.path}>{path.description}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setDarkMode(!darkMode)}>
        <DarkModeSwitcher />
      </div>
    </C.Container>
  );
};
