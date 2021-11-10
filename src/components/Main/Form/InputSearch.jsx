import React from 'react';
import PropTypes from 'prop-types';

export default function InputSearch({ value, onChange }) {
  return (
    <>
      <input
        id='search'
        type='text'
        name='search'
        placeholder='New-York'
        value={value}
        onChange={onChange}
      />
    </>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
