import { connect } from 'react-redux';
import { login } from 'auth/thunks/login';
import { AppState } from 'core/typings';

export interface StateProps {
  token: string;
}

export interface DispatchProps {
  login: typeof login;
}

const mapState = ({ auth }: AppState): StateProps => ({
  token: auth.token,
});

const mapDispatch: DispatchProps = {
  login,
};

export default connect(mapState, mapDispatch);
