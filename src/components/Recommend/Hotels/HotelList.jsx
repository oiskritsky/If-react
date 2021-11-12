import React from 'react';
import HotelItem from './HotelItem';

export default function hotelList(props) {
  return (
    <ul className='recommend__list'>
      {props.hotelData.slice(0, 4).map((el) => (
        <HotelItem
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
