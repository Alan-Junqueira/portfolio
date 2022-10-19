import React, { useState } from 'react';
import { SwitcherMoon } from '../Svgs/SwitcherMoon';
import { SwitcherSum } from '../Svgs/SwitcherSum';
import styles from './styles.module.css';


export const DarkModeSwitcher = () => {
  const [darkMode, setdarkMode] = useState(true);

  const handleSwitcherClick = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div className={styles.container} onClick={handleSwitcherClick}>
      <div
        className={styles.switcher}
        style={{ marginLeft: darkMode ? `${45}px` : '' }}
      ></div>
      <SwitcherMoon color="#F1C40F" />
      <SwitcherSum color="#F39C12" />
    </div>
  );
};
