import styled from 'styled-components';

type ContainerProps = {
  menuOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);
  width: ${(props) => (props.menuOpen ? '100%' : '0')};
  display: flex;
  justify-content: flex-end;

  transition: all ease 0.4s;

  @media (min-width: 1100px) {
    display: none;
  }
`;

type AsideMenuProps = {
  menuOpen: boolean;
};

export const AsideMenu = styled.aside<AsideMenuProps>`
  background-color: #010b40;
  width: ${(props) => (props.menuOpen ? '200px' : '0')};
  height: 100vh;

  padding: 4rem 0 0 0;

  transition: all ease 0.4s;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 1rem;

    &:hover {
      background-color: #3f3f40;

      border-radius: 8px;
    }
  }

  p {
    padding: 0.25rem 0.5rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    border-radius: 4px;
  }
`;

type BurgerMenuuProps = {
  menuOpen: boolean;
};

export const BurgerMenu = styled.button<BurgerMenuuProps>`
  position: absolute;
  top: 15px;
  right: ${(props) => (props.menuOpen ? '150px' : '15px')};

  width: 30px;
  height: 30px;
  background-color: #f23827;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  transition: all ease 0.4s;

  div {
    width: 15px;
    height: 2px;

    background-color: #fff;
  }
`;

type SwitcherProps = {
  menuOpen: boolean;
};

export const Switcher = styled.div<SwitcherProps>`
  position: absolute;
  top: ${(props) => (props.menuOpen ? '10px' : '-100px')};
  right: ${(props) => (props.menuOpen ? '10px' : '-100px')};
  transition: all ease 0.4s;
`;

type ChangeLanguageProps = {
  menuOpen: boolean;
};

export const ChangeLanguage = styled.div<ChangeLanguageProps>`
  position: absolute;
  bottom: ${(props) => (props.menuOpen ? '25px' : '-50px')};
  right: 50px;
  display: flex;
  gap: 1rem;

  transition: all ease 0.4s
`;
