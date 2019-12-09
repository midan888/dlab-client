import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import UserForm from 'user/userCrud/components/UserForm';
import Section from 'core/components/Section';
import connectStore, { StateProps, DispatchProps } from './connectStore';

interface Props extends RouteComponentProps<void>, StateProps, DispatchProps {}

const CreateUserPage = ({ requestCreateUser, validationErrors }: Props) => {
  return (
    <Section title="Edit user">
      <UserForm onSubmit={requestCreateUser} validationErrors={validationErrors} />
    </Section>
  );
};

export default connectStore(CreateUserPage);
