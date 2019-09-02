import { connect } from 'react-redux';
import { AppState } from 'core/typings';

export interface StateProps {
  token: string;
}

const mapState = ({ auth }: AppState): StateProps => ({
  token: auth.token,
});

export default connect(mapState);
