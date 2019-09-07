import React, { useEffect } from 'react';
import Section from 'core/components/Section';
import { Table, Cell, Row, TableHead, CellHead, TableBody } from 'core/components/Table';
import connectStore, { StateProps, DispatchProps } from './connectStore';
import CellAction from 'core/components/Table/CellAction';

interface Props extends StateProps, DispatchProps {}

const UserList = ({ requestSearchUsers, users }: Props) => {
  useEffect(() => {
    requestSearchUsers();
  }, []);

  return (
    <Section title="Users list">
      <Table>
        <TableHead>
          <Row>
            <CellHead>ID</CellHead>
            <CellHead>Email</CellHead>
            <CellHead>Full name</CellHead>
            <CellHead>&nbsp;</CellHead>
          </Row>
        </TableHead>
        <TableBody>
          {
            users.map(({ email, fullName, id }) => (
              <Row key={id}>
                <Cell>{id}</Cell>
                <Cell>{email}</Cell>
                <Cell>{fullName}</Cell>
                <CellAction path={`users/${id}`} />
              </Row>
            ))
          }
        </TableBody>
      </Table>
    </Section>
  );
};

export default connectStore(UserList);
