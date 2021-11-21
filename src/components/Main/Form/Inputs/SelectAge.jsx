import React from 'react';
import PropTypes from 'prop-types';

export default function SelectAge({ age }) {
  return (
    <div className='picker__age'>
      <span className='picker__age-span'>
        What is the age of the child you’re
        <br />
        travelling with?
      </span>
      <div className='picker__age-select-wrapper'>
        {age.map((item) => (
          <select className='picker__age-select' key={item.id}>
            <option value='0'>0 years old</option>
            <option value='1'>1 years old</option>
            <option value='2'>2 years old</option>
            <option value='3'>3 years old</option>
            <option value='4'>4 years old</option>
            <option value='5'>5 years old</option>
            <option value='6'>6 years old</option>
            <option value='7'>7 years old</option>
            <option value='8'>8 years old</option>
            <option value='9'>9 years old</option>
            <option value='10'>10 years old</option>
            <option value='11'>11 years old</option>
            <option value='12'>12 years old</option>
            <option value='13'>13 years old</option>
            <option value='14'>14 years old</option>
            <option value='15'>15 years old</option>
            <option value='16'>16 years old</option>
            <option value='17'>17 years old</option>
          </select>
        ))}
      </div>
    </div>
  );
}

SelectAge.propTypes = {
  age: PropTypes.arrayOf(PropTypes.object).isRequired,
};
