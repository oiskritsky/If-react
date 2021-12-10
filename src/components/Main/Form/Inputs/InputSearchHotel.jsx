import React from 'react';
import PropTypes from 'prop-types';

export default function InputSearchHotel({ value, onChange }) {
  return (
    <>
      <label className='input__lable' htmlFor='search'>
        Your destination or hotel name
      </label>
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

InputSearchHotel.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
