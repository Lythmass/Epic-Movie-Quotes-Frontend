import { ValidationType } from 'types';
const validation: ValidationType = {
  name: {
    required: 'Please fill out the field.',
    minLength: {
      value: 3,
      message: 'Please enter at least 3 characters.',
    },
    maxLength: {
      value: 15,
      message: 'Please do not enter more than 15 characters',
    },
    pattern: {
      value: /^[a-z0-9]+$/,
      message: 'Please enter only lowercase letters and numbers',
    },
  },
  email: {
    required: 'Please fill out the field.',
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Please enter a valid email format',
    },
  },
  password: {
    required: 'Please fill out the field.',
    minLength: {
      value: 8,
      message: 'Please enter at least 8 characters',
    },
    maxLength: {
      value: 15,
      message: 'Please do not enter more than 15 characters',
    },
    pattern: {
      value: /^[a-z0-9]+$/,
      message: 'Please enter only lowercase letters and numbers',
    },
  },
};

export default validation;
