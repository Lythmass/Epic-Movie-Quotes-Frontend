import { StylesConfig, CSSObjectWithLabel } from 'react-select';

export const ReactSelectStyles: StylesConfig = {
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    background: '#11101A',
    border: '1px solid #6C757D',
    padding: '0.30rem 0.4rem',
    margin: '0 0 0.45rem',
  }),
  multiValueLabel: (base: CSSObjectWithLabel) => ({
    ...base,
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
    color: 'white',
    fontSize: '0.875rem',
  }),
  multiValueRemove: (base: CSSObjectWithLabel) => ({
    ...base,
    color: 'white',
  }),
  multiValue: (base: CSSObjectWithLabel) => ({
    ...base,
    background: '#6C757D',
    borderRadius: '2px',
  }),
  placeholder: (base: CSSObjectWithLabel) => ({
    ...base,
    color: 'white',
  }),
};

export default ReactSelectStyles;
