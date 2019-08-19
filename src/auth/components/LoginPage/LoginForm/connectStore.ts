import { connect } from 'react-redux';
import { createUser } from 'auth/thunks/createUser';

export interface StateProps {}

export interface DispatchProps {
  createUser: typeof createUser;
}

const mapState = () => ({});

const mapDispatch: DispatchProps = {
  createUser,
};

export default connect<StateProps, DispatchProps>(mapState, mapDispatch);
