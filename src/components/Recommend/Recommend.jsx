import React from 'react';
import HotelList from './Hotels/HotelList';
import data from '../../mock/data';

export default function Recommend() {
  return (
    <section className='recommend'>
      <div className='recommend__wrapper'>
        <div className='recommend__title'>
          <h2>Homes loves</h2>
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
