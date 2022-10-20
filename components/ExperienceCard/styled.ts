import styled from 'styled-components';

export const Container = styled.dl`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-bottom: 1px solid #727273;
  padding-bottom: .5rem;
`;

type RoleProps = {
  showInfo: boolean;
};

export const Role = styled.dt<RoleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    flex: 1;
    color: #f23827;
    text-decoration: ${(props) => (props.showInfo ? 'underline' : 'none')};
    font-size: 1.3rem;

    transition: all ease 0.3s;
  }

  small {
    color: #04bf68;
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

type ButtonProps = {
  showInfo: boolean;
};

export const Button = styled.div<ButtonProps>`
  transform: ${(props) => (props.showInfo ? 'rotate(180deg)' : 'rotate(0)')};
  transition: all ease 0.4s;

  background-color: #04bf68;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const JobDescription = styled.div``;

type CompanyTypes = {
  color: string;
};

export const Company = styled.dd<CompanyTypes>`
  position: relative;
  display: block;
  color: ${(props) => props.color};
  text-decoration: underline;
  font-size: 1.2rem;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;

  &::before {
    position: absolute;
    top: 8px;
    left: -18px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    content: '';
    background-color: #04bf68;
  }
`;

type DescriptionProps = {
  color: string;
};

export const Description = styled.dd<DescriptionProps>`
font-size: .875rem;
  color: ${(props) => props.color};
  margin-left: 2rem;
  margin-right: 8rem;
`;
