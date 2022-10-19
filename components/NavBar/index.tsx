import React, { useState } from 'react';
import * as C from './styled';

import { LogoSvg } from '../Svgs/LogoSvg';
import Link from 'next/link';
import { DarkModeSwitcher } from '../DarkModeSwitcher';
import { paths } from '../../libs/paths';

type NavBarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const NavBar = ({ darkMode, setDarkMode }: NavBarProps) => {
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
        <DarkModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </C.Container>
  );
};
