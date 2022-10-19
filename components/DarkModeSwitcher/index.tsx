import React, { useState } from 'react';
import * as C from './styled';

import { SwitcherMoon } from '../Svgs/SwitcherMoon';
import { SwitcherSum } from '../Svgs/SwitcherSum';

type DarkModeSwitcherProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const DarkModeSwitcher = ({darkMode, setDarkMode}: DarkModeSwitcherProps) => {

  const handleSwitcherClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <C.Container onClick={handleSwitcherClick}>
      <C.Switcher marginLeft={darkMode ? `${45}px` : 0}></C.Switcher>
      <SwitcherMoon color="#F1C40F" />
      <SwitcherSum color="#F39C12" />
    </C.Container>
  );
};
