import styled from 'styled-components';
import Typography from 'core/components/Typography';

export const ItemRoot = styled.div`
  cursor: pointer;
  border-left: 4px solid #2A7BBF;

  &:hover {
    background-color: #627586;
  }
`;

export const ItemText = styled(Typography)`
  font-size: 16px;
  color: #fff;
  line-height: 40px;
  padding-left: 12px;
`;

export const SubItemsWrap = styled.div`
  background-color: #435969;
`;
