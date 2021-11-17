import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputSearchHotel from './Inputs/InputSearchHotel';
import InputDate from './Inputs/InputDate';

export default function Form({ hotelSearchData, setHotelSearchData }) {
  const [destination, setDestination] = useState(hotelSearchData);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHotelSearchData(destination);
  };

  return (
    <form className='form__desktop' onSubmit={handleSubmit}>
      <section className='form-desktop__wrapper'>
        <div className='sbar__first'>
          <InputSearchHotel value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div className='sbar__second'>
          <InputDate dateRange={dateRange} setDateRange={setDateRange} />
        </div>
        <input type='submit' id='sendForm' />
      </section>
    </form>
  );
}

Form.propTypes = {
  hotelSearchData: PropTypes.string.isRequired,
  setHotelSearchData: PropTypes.func.isRequired,
};
