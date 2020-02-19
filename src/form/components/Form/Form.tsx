import React, { useEffect } from 'react';
import { Form as FinalForm, FormProps } from 'react-final-form';
import { FormResponsePopup } from '../FormResponsePopup';
import connectStore, { DispatchProps } from './connectStore';
import { withFormResponse, FormResponseProps } from 'form/withFormResponse';
import compose from 'recompose/compose';
import { Root } from './Form.styles';

interface Props extends FormProps, DispatchProps, FormResponseProps {}

const Form = ({
  onSubmit,
  initialValues,
  render,
  updateValidationErrors,
  errorMessage,
  successMessage,
  updateErrorMessage,
  updateSuccessMessage,
}: Props) => {
  useEffect(() => {
    return () => {
      updateValidationErrors([]);
      updateErrorMessage('');
      updateSuccessMessage('');
    };
  }, []);

  return (
    <Root>
      {
        !successMessage && (
          <FinalForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={render}
          />
        )
      }
      <FormResponsePopup
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </Root>
  );
};

export default compose<Props, FormProps>(
  connectStore,
  withFormResponse,
)(Form);
