import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import * as C from './styled';

type IdiomsCardProps = {
  backgroundColor: string;
  textColor: string;
  percentage: number;
  percentageColor: string;
  language: string;
};

export const IdiomsCard = ({
  backgroundColor,
  language,
  percentage,
  percentageColor,
  textColor
}: IdiomsCardProps) => {
  return (
    <C.Container>
      <C.Idiom backgroundColor={backgroundColor} textColor={textColor}>
        {language}
      </C.Idiom>
      <C.Card textColor={textColor} backgroundColor={backgroundColor}>
        <C.CircularProgress textColor={textColor}>
          <p>{percentage}%</p>
          <div></div>
          <CircularProgress
            variant="determinate"
            value={percentage}
            style={{ color: percentageColor }}
          />
        </C.CircularProgress>
      </C.Card>
    </C.Container>
  );
};
