import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 245px;

  height: 100vh;

  h1 {
    align-self: baseline;
    margin: 150px auto 0 auto;

    color: #f23827;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
