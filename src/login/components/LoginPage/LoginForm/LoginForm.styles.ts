import styled from 'styled-components';
import Typography from 'core/components/Typography';

export const Root = styled.div`
  width: 392px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  padding: 48px;
  box-sizing: border-box;
  background-color: #fff;
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
  justify-content: space-between;
`;

export const ErrorMessage = styled(Typography)`
  color: ${({ theme }) => theme.errorColor };
  font-size: 12px;
  text-align: center;
  padding: 8px 0;
`;
