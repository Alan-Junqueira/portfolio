import React from 'react';
import * as C from './styled';
import { Envelope } from 'phosphor-react';

type Props = {
  image?: 'envelope';
  label: string;
  backgroundColor: string;
  color: string;
  border?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

export const Button = ({
  image,
  label,
  backgroundColor,
  color,
  border,
  width,
  height,
  onClick
}: Props) => {
  return (
    <C.Contaier
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      width={width}
      height={height}
      borderColor={border ? border : '#bf0b2c'}
    >
      {image === 'envelope' && (
        <Envelope size={30} weight="regular" color="#060E26" />
      )}
      {label}
    </C.Contaier>
  );
};
