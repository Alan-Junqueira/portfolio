import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  backgroundMedia1100: string;
};

export const Container = styled.div<ContainerProps>`
  padding: 2rem 2rem 0 16rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.875rem;

  background-color: ${(props) => props.backgroundColor};

  @media(max-width: 1100px){
    padding: 0 0 0 14.4rem;
    background-color: ${(props) => props.backgroundMedia1100};
  }

  @media(max-width: 768px) {
    padding: 0;
  }
`;

export const ChildrenDiv = styled.div`
  flex: 1;
`;