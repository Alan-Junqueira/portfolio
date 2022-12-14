import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #000000;
  width: 89px;
  height: 38px;
  padding: 3px 6px;
  border-radius: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

type SwitcherProps = {
  marginLeft: string | number
}

export const Switcher = styled.div<SwitcherProps>`
    position: absolute;
  width: 32px;
  height: 32px;
  background-color: #F23827;
  border-radius: 50%;
  transition: all ease .3s;
  margin-left: ${props => props.marginLeft};
`;