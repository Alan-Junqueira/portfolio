import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.25rem;
`;

type SpanProps = {
  backgroundColor: string;
  color: string;
  fontSize: string
};

export const Span = styled.span<SpanProps>`
  padding: 0.25rem 0.5rem;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: 15px;
  border-radius: 4px;

  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

type PProps = {
  color: string;
};

export const P = styled.p<PProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: ${(props) => props.color};
`;
