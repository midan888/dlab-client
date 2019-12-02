import React, { useEffect } from 'react';
import Section from 'core/components/Section';
import { Table, Cell, Row, TableHead, CellHead, TableBody } from 'core/components/Table';
import connectStore, { StateProps, DispatchProps } from './connectStore';
import { ButtonLink } from 'core/components/Routes/Link';

interface Props extends StateProps, DispatchProps {}

const UserListPage = ({ requestSearchUsers, users }: Props) => {
  useEffect(() => {
    requestSearchUsers();
  }, []);

  return (
    <Section
      title="Users list"
      controls={(
        <ButtonLink to="/users/create">Add user</ButtonLink>
      )}
    >
      <Table>
        <TableHead>
          <Row>
            <CellHead>ID</CellHead>
            <CellHead>Email</CellHead>
            <CellHead>Full name</CellHead>
          </Row>
        </TableHead>
        <TableBody>
          {
            users.map(({ email, fullName, id }) => (
              <Row key={id} to={`users/${id}`}>
                <Cell>{id}</Cell>
                <Cell>{email}</Cell>
                <Cell>{fullName}</Cell>
              </Row>
            ))
          }
        </TableBody>
      </Table>
    </Section>
  );
};

export default connectStore(UserListPage);
