import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: -48px;
  right: 0;
  display: inline-block;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: #439b73;
  border-radius: 4px;
  color: #439b73;
  background-color: #d9ebe3;

  &.error {
    border-color: ${({ theme }) => theme.errorColor};
    color: ${({ theme }) => theme.errorColor};
    background-color: #ffbdbc
  }
`;
