import { connect } from 'react-redux';
import { AppState, ThunkDispatch } from 'core/typings';
import { requestResetPasswordToken } from 'user/resetPassword/thunks';
import { ServerValidationError } from 'core/errors';

export interface StateProps {
  validationErrors: ServerValidationError[];
  link: string;
}

export interface DispatchProps {
  requestResetPasswordToken: (email: string) => ReturnType<ThunkDispatch>;
}

const mapState = ({ users, form, resetPassword }: AppState): StateProps => ({
  link: resetPassword.link,
  validationErrors: form.validationErrors,
});

const mapDispatch = {
  requestResetPasswordToken,
};

export default connect(mapState, mapDispatch);
