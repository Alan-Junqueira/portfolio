import styled from 'styled-components';

type ContainerProps = {
  textColor: string
}

export const Container = styled.footer<ContainerProps>`
  color: ${props => props.textColor};
  text-align: center;
  font-weight: 600;
  margin-bottom: 2rem;
`;
