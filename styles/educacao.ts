import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1100px) {
    margin-top: 4rem;
  }
`;

export const CertificatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  height: 100vh;

  @media (max-width: 1100px) {
    padding: 0
  }

  h2 {
    color: ${(props) => props.color};
    transition: all ease 0.3s;
  }

  button:before {
    background-color: #04bf68 !important;
  }
`;

export const Slides = styled.div`
  padding: 3rem;
`;
