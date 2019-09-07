import { connect } from 'react-redux';
import { AppState } from 'core/typings';
import { UserModel } from 'users/models';
import { requestSearchUsers } from 'users/thunks';

export interface StateProps {
  users: UserModel[];
}

export interface DispatchProps {
  requestSearchUsers: () => void;
}

const mapState = ({ users }: AppState): StateProps => ({
  users: users.users,
});

const mapDispatch: DispatchProps = {
  requestSearchUsers,
};

export default connect<StateProps, DispatchProps, {}, AppState>(mapState, mapDispatch);
