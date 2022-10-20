import React from 'react';
import { useDarkModeContext } from '../../../contexts/DarkMode';
import * as C from './styled';

export const Footer = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <C.Container textColor={darkMode ? '#c5c6c7' : '#F23827'}>
      <p>Feito com {darkMode && '🧡'} {!darkMode && '🖤'} por Alan Junqueira</p>
    </C.Container>
  );
};
