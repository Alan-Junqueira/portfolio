import styled from 'styled-components';

export const Container = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #060e26;
  border-radius: 8px;

  @media (max-width: 1100px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  li {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: rgba(4, 191, 104, 0.8);

    &:hover {
      color: #04bf68;
    }
  }
`;
