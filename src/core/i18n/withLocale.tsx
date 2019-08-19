import React from 'react';
import { i18n } from './i18n';

export interface WithLocale {
  i18n: typeof i18n;
}

export  const widthLocale = (Child: any) => (props: any) => (
  <Child {...props} i18n={i18n} />
);
