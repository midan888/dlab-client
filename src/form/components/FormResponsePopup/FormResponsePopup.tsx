import React from 'react';
import {
  Root,
} from './FormResponsePopup.styles';

export interface Props {
  successMessage: string;
  errorMessage: string;
}

export const FormResponsePopup = ({ successMessage, errorMessage }: Props) => {
  const hasError = Boolean(errorMessage);
  const hasSuccess = Boolean(successMessage);

  if (!hasError && !hasSuccess) {
    return null;
  }
  return (
    <Root className={hasError ? 'error' : ''}>
      {hasError ? errorMessage : successMessage}
    </Root>
  );
};
