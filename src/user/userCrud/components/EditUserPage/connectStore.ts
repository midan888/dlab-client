import { connect } from 'react-redux';
import { AppState } from 'core/typings';
import { UserModel } from 'user/models';
import { requestUser, requestUpdateUser } from 'user/userCrud/thunks';
import { ServerValidationError } from 'core/errors';

export interface StateProps {
  user?: UserModel;
  validationErrors: ServerValidationError[];
}

export interface DispatchProps {
  requestUser: (id: string) => void;
  requestUpdateUser: (data: any) => void;
}

const mapState = ({ users, form }: AppState): StateProps => ({
  user: users.activeUser,
  validationErrors: form.validationErrors,
});

const mapDispatch: DispatchProps = {
  requestUser,
  requestUpdateUser,
};

export default connect(mapState, mapDispatch);
