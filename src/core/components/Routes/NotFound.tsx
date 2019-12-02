import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const NotFound = ({ location }: RouteComponentProps<any>) => (
  <div>
    Not found {location.pathname}
  </div>
);

export default NotFound;
