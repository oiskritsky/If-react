import React from 'react';
import PropTypes from 'prop-types';

export default function InputPeople({ value, onClick }) {
  const [adults, kids, rooms] = [value.adults, value.kids, value.rooms];

  return (
    <>
      <input
        onClick={onClick}
        className='Adults Kids Rooms'
        type='text'
        placeholder={`${adults} Adults  -  ${kids} Kids  -  ${rooms} Rooms`}
        readOnly
      />
    </>
  );
}

InputPeople.propTypes = {
  value: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
