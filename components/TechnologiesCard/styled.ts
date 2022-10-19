import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

type LanguageProps = {
  color: string;
};

export const Language = styled.div<LanguageProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color};
  transition: all ease 0.3s;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
  }
`;
