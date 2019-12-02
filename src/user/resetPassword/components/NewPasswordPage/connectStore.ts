import { connect } from 'react-redux';
import { AppState, ThunkDispatch } from 'core/typings';
import {
  requestResetPassword,
  RequestResetPasswordParams,
} from 'user/resetPassword/thunks';

export interface StateProps {}

export interface DispatchProps {
  requestResetPassword: (params: RequestResetPasswordParams) => ReturnType<ThunkDispatch>;
}

const mapState = ({ }: AppState): StateProps => ({});

const mapDispatch: DispatchProps = {
  requestResetPassword,
};

export default connect(mapState, mapDispatch);
