import styled from 'styled-components';

export const Root = styled.button`
  height: 32px;
  background-color: ${({ theme }) => theme.accentColor}
  border-radius: 4px;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 300;
  outline: none;
  width: 100%;
`;
