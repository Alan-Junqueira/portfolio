import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  color: string;
  width: number | undefined;
  height: number | undefined;
  borderColor: string;
};

export const Contaier = styled.button<ContainerProps>`
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px solid ${(props) => props.borderColor};
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 0.3s;

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
