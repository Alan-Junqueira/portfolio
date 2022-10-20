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
    <C.Container>
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
