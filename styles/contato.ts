import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  color: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  padding: 4rem 2rem;
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1100px) {
    padding-inline: 3rem;
  }

  h1 {
    text-align: center;
    color: ${(props) => props.color};
  }
`;

export const ArticleTitle = styled.h2`
  margin-left: 1rem;
  color: ${(props) => props.color};
`;

export const ArticleSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ImageContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #727273;

  img {
    border-radius: 1rem;
    &:hover {
      filter: opacity(0.8);
    }
  }
`;

type ImageLinksProps = {
  color: string;
};

export const ImagesLinks = styled.div<ImageLinksProps>`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  a {
    flex: 1;
    padding: 0.5rem 1rem;
    background-color: #f23827;
    border-radius: 0.5rem;
    text-align: center;
    color: ${(props) => props.color};
    font-size: 0.875rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;
