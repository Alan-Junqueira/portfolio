import styles from './styles.module.css';
import * as C from './styled';

import React from 'react';

type Props = {
  label: string;
  description?: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
};

export const SocialInfo = ({
  backgroundColor,
  color,
  description,
  label,
  fontSize
}: Props) => {
  return (
    <C.Container>
      <C.Span backgroundColor={backgroundColor} fontSize={fontSize} color={color}>
        {label}
      </C.Span>
      {description && <C.P color={color}>{description}</C.P>}
    </C.Container>
  );
};
