import React from 'react';
import { Link } from 'react-router-dom';
import HotelItem from './HotelItem';

export default function hotelList({ hotelData }) {
  return (
    <ul className='recommend__list'>
      {hotelData.slice(0, 4).map((el) => (
        <Link key={el.id} to={`/hotels/${el.id}`}>
          <HotelItem name={el.name} city={el.city} country={el.country} imageUrl={el.imageUrl} />
        </Link>
      ))}
    </ul>
  );
}
