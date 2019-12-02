import React from 'react';
import { ServerValidationError } from 'core/errors';
import { AppState } from 'core/typings';
import { connect } from 'react-redux';

export interface FormResponseProps {
  validationErrors: ServerValidationError[];
  errorMessage: string;
  successMessage: string;
}

const mapState = ({ form }: AppState): FormResponseProps => ({
  validationErrors: form.validationErrors,
  errorMessage: form.errorMessage,
  successMessage: form.successMessage,
});

export const withFormResponse = <T extends FormResponseProps>(ChildComponent: React.ComponentType<T>) => {
  return connect(mapState)(({ validationErrors, errorMessage, successMessage, ...other }: FormResponseProps) => (
    <ChildComponent
      {...other as T}
      validationErrors={validationErrors}
      errorMessage={errorMessage}
      successMessage={successMessage}
    />
  ));
};
