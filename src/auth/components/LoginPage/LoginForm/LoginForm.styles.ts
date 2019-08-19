import styled from 'styled-components';
import Typography from 'core/components/Typography';

export const Root = styled.div`
  width: 392px;
  height: 456px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  padding: 48px;
  box-sizing: border-box;
`;

export const LogoWrap = styled.div`
  text-align: center;
  padding-bottom: 24px;
`;

export const Title = styled(Typography)`
  font-size: 14px;
  line-height: 16px;
`;

export const FieldsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;
