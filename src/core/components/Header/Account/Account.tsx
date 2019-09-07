import React from 'react';
import compose from 'recompose/compose';
import { LinkWrap } from 'core/components/Routes/Link';
import {
  Icon,
  UserCard,
  UserInfoWrap,
  PopoverRoot,
  UserName,
  Email,
  ListItem,
  ListItemText,
  Root,
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

  rootRef = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleIconClick = () => {
    this.setState({ show: true });
  };

  handleItemClick = () => {
    this.setState({ show: false });
  };

  handleDocumentClick = (e: MouseEvent) => {
    const { current } = this.rootRef;

    if (current && e.target && current.contains(e.target as Element)) {
      return;
    }

    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    const { email, fullName, logout } = this.props;

    return (
      <Root ref={this.rootRef}>
        {
          show && (
            <PopoverRoot>
              <UserCard>
                <Icon />
                <UserInfoWrap>
                  <UserName>{fullName}</UserName>
                  <Email>{email}</Email>
                </UserInfoWrap>
              </UserCard>
              <LinkWrap to="/profileEdit">
                <ListItem onClick={this.handleItemClick}>
                  <ListItemText>Edit profile</ListItemText>
                </ListItem>
              </LinkWrap>
              <LinkWrap to="/resetPassword">
                <ListItem onClick={this.handleItemClick}>
                  <ListItemText>Change password</ListItemText>
                </ListItem>
              </LinkWrap>
              <ListItem onClick={logout}>
                <ListItemText>Logout</ListItemText>
              </ListItem>
            </PopoverRoot>
          )
        }
        <Icon onClick={this.handleIconClick} />
      </Root>
    );
  }
}

export default compose<Props, {}>(
  connectStore,
)(Account);
