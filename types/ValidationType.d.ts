export type ValidationType = {
  [key: string]: object;
  name: {
    required: string;
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  email: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  password: {
    required: string;
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
};
