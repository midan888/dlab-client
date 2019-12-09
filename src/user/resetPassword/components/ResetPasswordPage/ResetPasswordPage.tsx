import React, { useCallback } from 'react';
import Section from 'core/components/Section';
import connectStore, { StateProps, DispatchProps } from './connectStore';
import { Field, FieldRenderProps, FormRenderProps } from 'react-final-form';
import TextField from 'core/components/TextField';
import { getValidationError } from 'core/errors';
import Button from 'core/components/Button';
import Form from 'form/components/Form';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<void>, StateProps, DispatchProps {}

const ResetPasswordPage = ({ validationErrors, requestResetPasswordToken }: Props) => {
  const handleSubmit = useCallback((data) => {
    requestResetPasswordToken(data.email);
  }, []);

  return (
    <Section title="Reset password">
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }: FormRenderProps) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                <TextField
                  label="Email"
                  errorMessage={getValidationError(validationErrors, 'email')}
                  value={input.value}
                  onChange={input.onChange}
                />
              )}
            />
            <Button onClick={handleSubmit}>Send the link</Button>
          </form>
        )}
      />
    </Section>
  );
};

export default connectStore(ResetPasswordPage);
