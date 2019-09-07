import styled from 'styled-components';
import Typography from 'core/components/Typography';
import accountIcon from 'assets/icons/user_icon.svg';

export const Icon = styled.img.attrs({ src: accountIcon })`
  display: block;
  width: 40px;
  height: 40px;
  opacity: 0.7;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const PopoverRoot = styled.div`
  width: 304px;
  background-color: #ffffff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const UserCard = styled.div`
  display: flex;
  padding: 24px;
`;

export const UserInfoWrap = styled.div`
  padding-left: 12px;
`;

export const UserName = styled(Typography)`
  font-size: 18px;
  line-height: 22px;
  font-weight: 300;
`;

export const Email = styled(Typography)`
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
`;

export const ListItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #405564;
    color: #fff;
  }
`;

export const ListItemText = styled(Typography)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  padding: 0 24px;
`;

export const Root = styled.div`
  position: relative;
`;
