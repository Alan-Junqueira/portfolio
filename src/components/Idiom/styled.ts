import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  color: string;
};

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  transition: all ease .5s;

  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover{
    opacity: .8;
  }
`;
