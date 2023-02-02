import styled from 'styled-components';

export const SliderHomeContainer = styled.div`
  display: flex;
  transition: all ease 0.3s;
`;

export const SlideArrowsContainer = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  left: 15px;
  top: 45%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: calc(calc(100vw - 340px));
  }

  @media (max-width: 768px) {
    width: calc(calc(100vw - 60px));
  }
`;

export const SliderArrow = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  padding: 0.5rem;

  transition: all ease 0.3s;

  border: 1px solid black;

  opacity: 0.3;

  cursor: pointer;

  &:hover {
    background-color: #fff;
    opacity: 0.7;
  }
`;

export const SliderDots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`;

export const SliderDot = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.active {
    background: #000;
  }
`;
