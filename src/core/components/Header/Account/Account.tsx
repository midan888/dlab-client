import React from 'react';
import Popover from 'react-tiny-popover'
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

interface State {
  show: boolean;
}

class Account extends React.Component<{}, State> {
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
                  <UserName>Rachel Green</UserName>
                  <Email>rachel84@gmail.com</Email>
                </UserInfoWrap>
              </UserCard>
              <ListItem>
                <ListItemText>Account Settings</ListItemText>
              </ListItem>
              <ListItem>
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

export default Account;
