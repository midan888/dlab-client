import React from 'react';
import { Field, FieldRenderProps, Form } from 'react-final-form';
import compose from 'recompose/compose';
import Logo from 'core/components/Logo';
import TextField from 'core/components/TextField';
import Button from 'core/components/Button';
import Checkbox from 'core/components/Checkbox';
import { widthLocale, WithLocale } from 'core/i18n/withLocale';
import {
  Root,
  LogoWrap,
  Title,
  FieldsWrap,
  ErrorMessage,
} from './LoginForm.styles';
import connectStore, { StateProps, DispatchProps } from './connectStore';
import { getValidationError } from 'core/errors';

interface Props extends StateProps, DispatchProps, WithLocale {}

const LoginForm = ({ i18n, login, serverError, validationErrors }: Props) => {
  return (
    <Root>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Title>{i18n('auth.loginForm.title')}</Title>
      <Form
        onSubmit={login}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FieldsWrap>
              <Field
                name="email"
                render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                  <TextField
                    label="Email"
                    errorMessage={getValidationError(validationErrors, 'email')}
                    value={input.value}
                    onChange={input.onChange}
                    placeholder="Enter email"
                  />
                )}
              />
              <Field
                name="password"
                render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                  <TextField
                    label="Password"
                    errorMessage={getValidationError(validationErrors, 'password')}
                    value={input.value}
                    placeholder="Enter password"
                    onChange={input.onChange}
                  />
                )}
              />
              <Field
                name="remember"
                type="checkbox"
                render={({ input }: FieldRenderProps<boolean, HTMLInputElement>) => (
                  <Checkbox
                    label="Remember me"
                    onChange={input.onChange}
                  />
                )}
              />
            </FieldsWrap>
            <ErrorMessage>{serverError}</ErrorMessage>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        )}
      />
    </Root>
  );
};

export default compose<Props, {}>(
  connectStore,
  widthLocale,
)(LoginForm);
