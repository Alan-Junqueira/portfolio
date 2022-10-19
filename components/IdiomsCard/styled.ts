import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type CardProps = {
  backgroundColor: string;
  textColor: string;
};

export const Card = styled.div<CardProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  width: 50px;
  height: 50px;
  padding: 6px 5px;
  border-radius: 0 0 8px 8px;

  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

type CircularProgressProps = {
  textColor: string;
};

export const CircularProgress = styled.div<CircularProgressProps>`
  position: relative;
  display: flex;
  align-items: center;

  width: 35px;
  margin-left: 5px;

  div {
    position: absolute;
    top: 3.2px;
    left: -2px;

    width: 33px;
    height: 33px;
    border-radius: 50%;

    opacity: 0.5;

    border: 2px solid ${(props) => props.textColor};
  }

  p {
    position: absolute;
    top: 15px;
    left: 4px;

    font-weight: 400;
    font-size: 10px;
    line-height: 8px;
    color: ${(props) => props.textColor};
  }
`;

type IdiomProps = {
  backgroundColor: string;
  textColor: string;
};

export const Idiom = styled.p<IdiomProps>`
  font-weight: 600;
  font-size: 8px;
  line-height: 8px;
  padding: 6px 5px;


  border-radius: 8px 8px 0 0 ;

  text-align: center;

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`;
