import React from 'react';
import AvailableHotelList from './AvailableHotelList';

export default function Available({ filteredHotels }) {
  return (
    <>
      <section className='available'>
        <div className='available__wrapper'>
          <div className='available__title'>
            <h2>Available hotels</h2>
          </div>
          <div className='slider-buttons-available'>
            <button type='button' aria-label='prev' className='btn-prev-available' />
            <button type='button' aria-label='next' className='btn-next-available' />
          </div>
          <div className='available-list__wrapper'>
            <AvailableHotelList filteredHotels={filteredHotels} />
          </div>
        </div>
      </section>
    </>
  );
}
