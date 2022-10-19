import * as C from './styled';

import React from 'react';

type IdiomProps = {
  onClick: () => any;
  backgroundColor: string;
  color: string;
  label: string;
};

const Idiom = ({ backgroundColor, color, label, onClick }: IdiomProps) => {
  return (
    <C.Container
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
    >
      {label}
    </C.Container>
  );
};

export default Idiom;
