import styled from 'styled-components';
import Typography from 'core/components/Typography';

export const Root = styled.div`
  padding: 24px;
  max-width: 1024px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled(Typography)`
  font-size: 20px;
  padding-bottom: 16px;
`;

export const ControlsWrap = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
