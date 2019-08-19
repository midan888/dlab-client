import styled from 'styled-components';
import Typography from 'core/components/Typography';

export const Root = styled.div`
  padding: 16px 0;
  border-top: 2px solid #192D37;
  border-bottom: 2px solid #192D37;
`;

export const Title = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  color: #73BFFF;
  text-transform: uppercase;
  padding-left: 16px;
  margin-bottom: 24px;
`;

export const ItemRoot = styled.div`
  height: 40px;
  cursor: pointer;
  border-left: 4px solid #2A7BBF;
  padding-left: 12px;

  &:hover {
    background-color: #627586;
  }
`;

export const ItemText = styled(Typography)`
  font-size: 16px;
  color: #fff;
  line-height: 40px;
`;
