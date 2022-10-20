import * as C from './styled';

import React, { useState } from 'react';
import { CaretUp } from 'phosphor-react';
import { useDarkModeContext } from '../../contexts/DarkMode';

type ExperienceCardProps = {
  initialPeriod: number;
  endPeriod: number;
  role: string;
  company: string;
  description: string;
};

export const ExperienceCard = ({
  company,
  description,
  endPeriod,
  initialPeriod,
  role
}: ExperienceCardProps) => {
  const { darkMode } = useDarkModeContext();
  const [isActive, setIsActive] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setIsActive(!isActive);
    setShowInfo(!showInfo);
  };

  return (
    <C.Container>
      <C.Role showInfo={showInfo} onClick={handleShowInfo}>
        <small>
          {initialPeriod} - {endPeriod} |
        </small>
        <h2>{role}</h2>

        <C.Button showInfo={showInfo}>
          <CaretUp size={25} color="#F23827" weight="bold" />
        </C.Button>
      </C.Role>
      {isActive && (
        <C.JobDescription>
          <C.Company color={darkMode ? '#C5C6C7' : '#FCFDFF'}>
            {company}.
          </C.Company>
          <C.Description color={darkMode ? '#c5c6c7' : '#FCFDFF'}>
            - {description}
          </C.Description>
        </C.JobDescription>
      )}
    </C.Container>
  );
};
