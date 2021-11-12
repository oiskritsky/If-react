import React from 'react';
import PropTypes from 'prop-types';
import HotelList from './Hotels/HotelList';

export default function Recommend({ title, data }) {
  return (
    <section className='recommend'>
      <div className='recommend__wrapper'>
        <div className='recommend__title'>
          <h2>{title}</h2>
        </div>
        <div className='slider-buttons'>
          <button type='button' aria-label='prev' className='btn-prev' />
          <button type='button' aria-label='next' className='btn-next' />
        </div>
        <div className='recommend-list__wrapper'>
          <HotelList hotelData={data} />
        </div>
      </div>
    </section>
  );
}

Recommend.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
