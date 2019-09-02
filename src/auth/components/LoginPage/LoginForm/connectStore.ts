import { connect } from 'react-redux';
import { login } from 'auth/thunks/login';
import { AppState } from 'core/typings';
import { ServerValidationError } from 'core/errors';

export interface StateProps {
  serverError: string;
  validationErrors: ServerValidationError[];
}

export interface DispatchProps {
  login: typeof login;
}

const mapState = ({ server }: AppState): StateProps => ({
  serverError: server.serverError,
  validationErrors: server.validationErrors,
});

const mapDispatch: DispatchProps = {
  login,
};

export default connect(mapState, mapDispatch);
