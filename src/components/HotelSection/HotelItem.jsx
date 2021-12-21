import React from 'react';

import PropTypes from 'prop-types';

export default function HotelItem({ name, city, country, imageUrl }) {
  return (
    <li className='recommend__list-item'>
      <img src={imageUrl} alt='hotelImage' />
      <h2>{name}</h2>
      <p>
        {city}, {country}
      </p>
    </li>
  );
}

HotelItem.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
