import { connect } from 'react-redux';
import { AppState } from 'core/typings';
import {
  updateValidationErrors,
  updateSuccessMessage,
  updateErrorMessage,
} from 'form/actions';

export interface DispatchProps {
  updateValidationErrors: typeof updateValidationErrors;
  updateSuccessMessage: typeof updateSuccessMessage;
  updateErrorMessage: typeof updateErrorMessage;
}

const mapDispatch: DispatchProps = {
  updateValidationErrors,
  updateErrorMessage,
  updateSuccessMessage,
};

export default connect<undefined, DispatchProps, {}, AppState>(undefined, mapDispatch);
