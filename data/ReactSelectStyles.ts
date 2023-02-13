export const ReactSelectStyles = {
  control: (base: StyleSheet) => ({
    ...base,
    background: '#11101A',
    border: '1px solid #6C757D',
    padding: '0.30rem 0.4rem',
    margin: '0 0 0.45rem',
  }),
  multiValueLabel: (base: StyleSheet) => ({
    ...base,
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
    color: 'white',
    fontSize: '0.875rem',
  }),
  multiValueRemove: (base: StyleSheet) => ({
    ...base,
    color: 'white',
  }),
  multiValue: (base: StyleSheet) => ({
    ...base,
    background: '#6C757D',
    borderRadius: '2px',
  }),
  placeholder: (base: StyleSheet) => ({
    ...base,
    color: 'white',
  }),
};

export default ReactSelectStyles;
