import React, { useCallback } from 'react';
import Section from 'core/components/Section';
import compose from 'recompose/compose';
import connectStore, { StateProps, DispatchProps } from './connectStore';
import { Field, FieldRenderProps } from 'react-final-form';
import TextField from 'core/components/TextField';
import { getValidationError } from 'core/errors';
import Button from 'core/components/Button';
import Form from 'form/components/Form';
import { FormResponseProps, withFormResponse } from 'form/withFormResponse';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  token: string;
}

interface Props extends RouteComponentProps<RouteParams>, StateProps, DispatchProps, FormResponseProps {}

const NewPasswordPage = ({
  match,
  validationErrors,
  requestResetPassword,
}: Props) => {
  const { token } = match.params;

  const handleSubmit = useCallback((data) => {
    requestResetPassword(data);
  }, [token]);

  return (
    <Section title="New password">
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          token,
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="password"
              render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                <TextField
                  label="Password"
                  errorMessage={getValidationError(validationErrors, 'password')}
                  value={input.value}
                  onChange={input.onChange}
                />
              )}
            />
            <Field
              name="passwordConfirm"
              render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                <TextField
                  label="Confirm Password"
                  errorMessage={getValidationError(validationErrors, 'passwordConfirm')}
                  value={input.value}
                  onChange={input.onChange}
                />
              )}
            />
            <Button onClick={handleSubmit}>Change password</Button>
          </form>
        )}
      />
    </Section>
  );
};

export default compose<Props, {}>(
  connectStore,
  withFormResponse,
)(NewPasswordPage);
