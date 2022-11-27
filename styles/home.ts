import styled from 'styled-components';

interface ISliderHomeContainer {
  totalSlides: number;
  marginLeft: number;
}

export const SliderHomeContainer = styled.div<ISliderHomeContainer>`
  display: flex;
  gap: 1rem;
  width: 100%;
  transition: all ease 0.3s;
  width: ${(props) => props.totalSlides}px;

  margin-left: -${(props) => props.marginLeft}px;
`;

export const SlideArrowsContainer = styled.div`
  position: absolute;
  width: calc(calc(100vw - 405px));
  left: 15px;
  top: 50%;
  display: flex;
  justify-content: space-between;

  span {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    transition: all ease 0.3s;

    border: 1px solid black;

    opacity: 0.3;

    cursor: pointer;

    &:hover {
      background-color:#FFF;
      opacity: 0.7;
    }
  }
`;
