/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

export default function InputPeople({ value, onClick }) {
  const [adults, kids, rooms] = [value.adults, value.kids, value.rooms];

  return (
    <>
      <input onClick={onClick} className='Adults' type='text' placeholder={`${adults} Adults`} />
      <input onClick={onClick} className='Kids' type='text' placeholder={`${kids} Kids`} />
      <input onClick={onClick} className='Rooms' type='text' placeholder={`${rooms} Room`} />
    </>
  );
}

InputPeople.propTypes = {
  value: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
