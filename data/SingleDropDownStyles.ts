import { StylesConfig, CSSObjectWithLabel } from 'react-select';

export const SingleDropDownStyles: StylesConfig = {
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    background: 'black',
    border: 'none',
    padding: '0 2rem',
    borderRadius: '0',
    minHeight: '5.375rem',
  }),
  indicatorSeparator: (base: CSSObjectWithLabel) => ({
    ...base,
    display: 'none',
  }),
  placeholder: (base: CSSObjectWithLabel) => ({
    ...base,
    color: 'white',
  }),
  singleValue: (base: CSSObjectWithLabel) => ({
    ...base,
    color: 'white',
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    height: '200px',
    overflow: 'auto',
  }),
};

export default SingleDropDownStyles;
