import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  textColor: string;
  hoverColor: string
};

export const Container = styled.nav<ContainerProps>`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.backgroundColor};
  border-radius: 1rem;

  @media (max-width: 1100px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  li {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: ${(props) => props.textColor};
    transition: all ease 0.3s;

    &:hover {
      color: ${(props) => props.hoverColor};
    }
  }
`;
