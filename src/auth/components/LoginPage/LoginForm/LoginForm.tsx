import React from 'react';
import { Field, FieldRenderProps, Form } from 'react-final-form';
import Logo from 'core/components/Logo';
import TextField from 'core/components/TextField';
import Button from 'core/components/Button';
import { widthLocale, WithLocale } from 'core/i18n/withLocale';
import {
  Root,
  LogoWrap,
  Title,
  FieldsWrap,
} from './LoginForm.styles';
import connectStore, { StateProps, DispatchProps } from './connectStore';

interface Props extends StateProps, DispatchProps, WithLocale {}

const LoginForm = ({ i18n, createUser }: Props) => {
  return (
    <Root>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Title>{i18n('auth.loginForm.title')}</Title>
      <Form
        onSubmit={createUser}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FieldsWrap>
              <Field
                name="login"
                render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                  <TextField
                    label="Login"
                    value={input.value}
                    onChange={input.onChange}
                    placeholder="Enter login"
                  />
                )}
              />
              <Field
                name="password"
                render={({ input }: FieldRenderProps<string, HTMLInputElement>) => (
                  <TextField
                    label="Password"
                    value={input.value}
                    placeholder="Enter password"
                    onChange={input.onChange}
                  />
                )}
              />
              <Button onClick={() => {}}>Submit</Button>
            </FieldsWrap>
          </form>
        )}
      />
    </Root>
  );
};

export default connectStore(widthLocale(LoginForm));
