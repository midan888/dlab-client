import { connect } from 'react-redux';
import { AppState } from 'core/typings';

export interface StateProps {
  token: string;
}

const mapState = ({ login }: AppState): StateProps => ({
  token: login.token,
});

export default connect(mapState);
