import styled from 'styled-components';

export const Container = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }

  input[type='button']:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  textarea {
    width: 100%;
    height: 154px;
    margin-bottom: 2rem;
    border-radius: 4px;
    padding: 10px 15px;
    letter-spacing: 0.5px;
  }
`;

export const Error = styled.p`
  color: #bf0b2c;
  margin-top: 0.25rem;
  text-decoration: underline;
`;
