import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';

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
          <Select key={item.id} />
        ))}
      </div>
    </div>
  );
}

SelectAge.propTypes = {
  age: PropTypes.arrayOf(PropTypes.object).isRequired,
};
