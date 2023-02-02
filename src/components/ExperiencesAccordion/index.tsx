import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDarkModeContext } from '../../contexts/DarkMode';
import { Accordion, AccordionDetails, AccordionSummary } from './styled';

interface ExperiencesAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialPeriod: number;
  endPeriod: number;
  role: string;
  company: string;
  description: string;
  panel: string;
  expandedActive: string;
}

const ExperiencesAccordion = ({
  company,
  description,
  endPeriod,
  initialPeriod,
  role,
  panel,
  expandedActive,
  ...props
}: ExperiencesAccordionProps) => {
  const { darkMode } = useDarkModeContext();

  return (
    <div>
      <Accordion
        {...props}
        expanded={expandedActive === panel}
        onChange={() => {}}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary
          aria-controls={panel + 'd-content'}
          id={panel + 'd-header'}
        >
          <Typography
            style={{
              color: '#04bf68',
              fontSize: '1rem',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {initialPeriod} - {endPeriod} |
          </Typography>
          <Typography
            style={{
              color: '#f23827',
              fontSize: '1.3rem',
              flex: 1,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 'bold'
            }}
          >
            {role}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              color: darkMode ? '#c5c6c7' : '#FCFDFF'
            }}
          >
            <span
              style={{
                color: '#04bf68',
                fontSize: '1.3rem',
                flex: 1,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 'bold'
              }}
            >
              {company}
            </span>
            <br />
            {description}.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export { ExperiencesAccordion };
