import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  color: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 4rem 2rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h2 {
    text-align: center;
    color: ${props => props.color};
    margin-bottom: 2rem;
  }
  

  @media (max-width: 1100px) {
    padding-inline: 3rem;
  }
`;

type TitleProps = {
  showInfo: boolean;
};

export const Title = styled.dt<TitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    flex: 1;
    color: #f23827;
    text-decoration: ${(props) => (props.showInfo ? 'underline' : 'none')};
    font-size: 1.5rem;

    transition: all ease 0.3s;
  }

  small {
    color: #04bf68;
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

type RoleTypes = {
  color: string;
};

export const Role = styled.dd<RoleTypes>`
  display: block;
  color: ${(props) => props.color};
  text-decoration: underline;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

type DescriptionProps = {
  color: string;
};

export const Description = styled.dd<DescriptionProps>`
  color: ${(props) => props.color};
`;
