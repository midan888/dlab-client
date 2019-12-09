import { connect } from 'react-redux';
import { login } from 'login/thunks';
import { AppState } from 'core/typings';

export interface StateProps {
  token: string;
}

export interface DispatchProps {
  login: typeof login;
}

const mapState = ({ login }: AppState): StateProps => ({
  token: login.token,
});

const mapDispatch: DispatchProps = {
  login,
};

export default connect(mapState, mapDispatch);
