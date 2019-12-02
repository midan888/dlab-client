import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import UserForm from 'user/userCrud/components/UserForm';
import Section from 'core/components/Section';
import connectStore, { StateProps, DispatchProps } from './connectStore';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params>, StateProps, DispatchProps {}

const EditUserPage = ({ match, requestUser, user, requestUpdateUser, validationErrors }: Props) => {
  const { id } = match.params;
  useEffect(() => {
    requestUser(match.params.id);
  }, [id]);

  return (
    <Section title="Edit user">
      <UserForm
        user={user}
        validationErrors={validationErrors}
        onSubmit={requestUpdateUser}
        hidePassword={true}
      />
    </Section>
  );
};

export default connectStore(EditUserPage);
