import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  color: string;
};

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  transition: all ease .5s;

  &:hover{
    opacity: .8;
  }
`;
