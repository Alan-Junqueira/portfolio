import styled from 'styled-components';

export const Container = styled.a`
  background-color: rgb(242, 56, 39);
  padding: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    filter: brightness(1.2);
  }
`;
