import { ValidationType } from 'types';
const validation: ValidationType = {
  name: {
    required: 'validation.required',
    minLength: {
      value: 3,
      message: 'validation.min-name',
    },
    maxLength: {
      value: 15,
      message: 'validation.max',
    },
    pattern: {
      value: /^[a-z0-9]+$/,
      message: 'validation.pattern',
    },
  },
  email: {
    required: 'validation.required',
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'validation.valid-email',
    },
  },
  password: {
    required: 'validation.required',
    minLength: {
      value: 8,
      message: 'validation.min-pass',
    },
    maxLength: {
      value: 15,
      message: 'validation.max',
    },
    pattern: {
      value: /^[a-z0-9]+$/,
      message: 'validation.pattern',
    },
  },
};

export default validation;
