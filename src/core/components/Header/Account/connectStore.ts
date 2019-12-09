import { connect } from 'react-redux';
import { AppState } from 'core/typings';
import { logout } from 'login/thunks';

export interface StateProps {
  fullName: string;
  email: string;
}

export interface DispatchProps {
  logout: () => void;
}

const mapState = ({ login }: AppState): StateProps => ({
  fullName: login.user.fullName,
  email: login.user.email,
});

const mapDispatch: DispatchProps = {
  logout,
};

export default connect<StateProps, DispatchProps, {}, AppState>(mapState, mapDispatch);
