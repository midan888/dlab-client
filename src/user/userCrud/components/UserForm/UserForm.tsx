import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import Form from 'form/components/Form';
import TextField from 'core/components/TextField';
import { UserModel } from 'user/models';
import Button from 'core/components/Button';
import { ServerValidationError, getValidationError } from 'core/errors';

interface Props {
  onSubmit?: any;
  user?: UserModel;
  hidePassword?: boolean;
  validationErrors: ServerValidationError[];
}

const UserForm = ({ onSubmit, user, hidePassword, validationErrors }: Props) => (
  <div>
    <Form
      onSubmit={onSubmit}
      initialValues={{
        fullName: user ? user.fullName : '',
        email: user ? user.email : '',
        id: user ? user.id : 0,
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="fullName"
            render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
              <TextField
                label="Full name"
                value={input.value}
                errorMessage={getValidationError(validationErrors, 'fullName')}
                onChange={input.onChange}
              />
            )}
          />
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
          {
            !hidePassword && (
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
            )
          }
          {
            !hidePassword && (
              <Field
                name="confirmPassword"
                render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                  <TextField
                    label="Confirm password"
                    errorMessage={getValidationError(validationErrors, 'confirmPassword')}
                    value={input.value}
                    onChange={input.onChange}
                  />
                )}
              />
            )
          }
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      )}
    />
  </div>
);

export default UserForm;
