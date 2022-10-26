import React, { createContext, ReactNode, useContext, useState } from 'react';

type darkModeContextProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const defaultValues: darkModeContextProps = {
  darkMode: true,
  setDarkMode: () => {}
};

const darkModeContext = createContext<darkModeContextProps>(defaultValues);

export const useDarkModeContext = () => {
  return useContext(darkModeContext);
};

type Props = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};
