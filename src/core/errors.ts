
export interface ServerValidationError {
  msg: string;
  param: string;
  location: string;
}

export const getValidationError = (errors: ServerValidationError[], param: string) => {
  const errorData = errors.find(error => error.param === param);

  if (errorData) {
    return errorData.msg;
  }

  return '';
};

export const hasValidationError = (errors: ServerValidationError[], param: string) => {
  const error = getValidationError(errors, param);

  return Boolean(error);
};

export class ValidationError extends Error {
  param: string;
  msg: string;

  constructor(param: string, msg: string) {
    super(msg);
    this.msg = msg;
    this.param = param;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
