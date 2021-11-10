import React from 'react';

export default function AvailableHotelItem({ name, city, country, imageUrl }) {
  return (
    <li className='recommend__list-item'>
      <img src={imageUrl} alt='hotelImage' />
      <a href='./'>{name}</a>
      <p>
        {city} {country}
      </p>
    </li>
  );
}
