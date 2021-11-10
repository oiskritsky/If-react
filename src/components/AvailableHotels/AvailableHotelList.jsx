import React from 'react';
import PropTypes from 'prop-types';
import AvailableHotelItem from './AvailableHotelItem';

export default function AvailableHotelList({ filteredHotels }) {
  return (
    <ul className='recommend__list'>
      {filteredHotels.map((el) => (
        <AvailableHotelItem
          name={el.name}
          city={el.city}
          country={el.country}
          imageUrl={el.imageUrl}
          key={el.id}
        />
      ))}
    </ul>
  );
}

AvailableHotelList.propTypes = {
  filteredHotels: PropTypes.array.isRequired,
};
