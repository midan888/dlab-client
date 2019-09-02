import { connect } from 'react-redux';
import { login } from 'auth/thunks/login';
import { AppState } from 'core/typings';
import { ServerValidationError } from 'core/errors';

export interface StateProps {
  serverError: string;
  validationErrors: ServerValidationError[];
  token: string;
}

export interface DispatchProps {
  login: typeof login;
}

const mapState = ({ server, auth }: AppState): StateProps => ({
  serverError: server.serverError,
  validationErrors: server.validationErrors,
  token: auth.token,
});

const mapDispatch: DispatchProps = {
  login,
};

export default connect(mapState, mapDispatch);
