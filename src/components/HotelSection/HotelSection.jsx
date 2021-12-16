import React from 'react';
import PropTypes from 'prop-types';
import HotelList from './HotelList';

export default function Recommend({ title, data }) {
  return (
    <section className='recommend'>
      <div className='recommend__title'>
        <h2>{title}</h2>
      </div>
      <div className='recommend-list__wrapper'>
        <HotelList hotelData={data} />
      </div>
    </section>
  );
}

Recommend.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
