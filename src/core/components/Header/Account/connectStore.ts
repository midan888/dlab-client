import { connect } from 'react-redux';
import { AppState } from 'core/typings';
import { logout } from 'auth/thunks/logout';

export interface StateProps {
  fullName: string;
  email: string;
}

export interface DispatchProps {
  logout: () => void;
}

const mapState = ({ auth }: AppState): StateProps => ({
  fullName: auth.user.fullName,
  email: auth.user.email,
});

const mapDispatch: DispatchProps = {
  logout,
};

export default connect<StateProps, DispatchProps, {}, AppState>(mapState, mapDispatch);
