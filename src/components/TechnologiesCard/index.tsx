import React from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

import * as C from './styled';

type Props = {
  textColor: string;
  percentage: number;
  percentageColor: string;
  technology: string;
};

export const TechnologiesCard = ({
  percentage,
  percentageColor,
  technology,
  textColor
}: Props) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: percentageColor
    }
  }));

  return (
    <C.Container>
      <C.Language color={textColor}>
        <p>{technology}</p>
        <span>{percentage}%</span>
      </C.Language>
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={percentage} />
      </Box>
    </C.Container>
  );
};
