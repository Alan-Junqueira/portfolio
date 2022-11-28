import styled from 'styled-components';

interface IHomeCardContainer {
  partialBgColor: string;
  background?: string
}

export const HomeCardContainer = styled.div<IHomeCardContainer>`
  width: 300px;
  display: flex;

  border: 3px solid ${(props) => props.partialBgColor};

  flex-direction: column;

  border-radius: 8px;
  overflow: hidden;

  background-color: ${props => props.background};

  > div:nth-child(1) {
    height: 100px;
    background-color: ${(props) => props.partialBgColor};

    padding: 1rem;
  }
`;

interface ICardLogo {
  borderColor: string;
}

export const CardLogo = styled.div<ICardLogo>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  > div {
    background-color: #fcfdff;
    border-radius: 50%;
    margin-top: -100px;

    border: 2px solid ${(props) => props.borderColor};
    box-shadow: 0px 0px 0px 1.5px white,
      0px 0px 0px 4px ${(props) => props.borderColor};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    height: 90px;
  }
`;

interface IDescriptionCardContainer {
  buttonColor: string;
}

export const DescriptionCardContainer = styled.div<IDescriptionCardContainer>`
  padding: 0 1rem 1rem;
  margin-top: -1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    align-self: center;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    align-self: center;
    font-size: 0.875rem;
    font-weight: 500;

    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 3; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  button {
    align-self: center;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    background-color: ${(props) => props.buttonColor};
    font-weight: bold;

    color: #fcfdff;

    width: 7rem;
  }
`;
