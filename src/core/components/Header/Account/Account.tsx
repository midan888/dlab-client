import React from 'react';
import Popover from 'react-tiny-popover';
import {
  Icon,
  UserCard,
  UserInfoWrap,
  PopoverRoot,
  UserName,
  Email,
  ListItem,
  ListItemText,
} from './Account.styles';
import connectStore, { StateProps, DispatchProps } from './connectStore';

interface State {
  show: boolean;
}

interface Props extends StateProps, DispatchProps {}

class Account extends React.Component<Props, State> {
  state = {
    show: false,
  };

  handleMouseOver = () => {
    this.setState({ show: true });
  };

  handleMouseLeave = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    const { email, fullName, logout } = this.props;

    return (
      <div>
        <Popover
          isOpen={show}
          position={['bottom']}
          onClickOutside={this.handleMouseLeave}
          containerStyle={{ boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.25)' }}
          content={() => (
            <PopoverRoot>
              <UserCard>
                <Icon />
                <UserInfoWrap>
                  <UserName>{fullName}</UserName>
                  <Email>{email}</Email>
                </UserInfoWrap>
              </UserCard>
              <ListItem>
                <ListItemText>Account Settings</ListItemText>
              </ListItem>
              <ListItem onClick={logout}>
                <ListItemText>Logout</ListItemText>
              </ListItem>
            </PopoverRoot>
          )}
        >
          <Icon onClick={this.handleMouseOver} />
        </Popover>
      </div>
    );
  }
}

export default connectStore(Account);
