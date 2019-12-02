import styled from 'styled-components';

export const SubItemRoot = styled.div`
  height: 40px;
  cursor: pointer;
  line-height: 40px;
  padding-left: 12px;
  color: #BCBCBC;

  &:hover {
    color: #FFF;
    background-color: ${({ theme }) => theme.accentColor };
  }
`;
