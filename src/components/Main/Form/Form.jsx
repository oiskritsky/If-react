import React, { useState } from 'react';
import InputSearch from './InputSearch';

export default function Form({ hotelSearchData, setHotelSearchData }) {
  const [destination, setDestination] = useState(hotelSearchData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHotelSearchData(destination);
  };
  return (
    <form className='form__desktop' onSubmit={handleSubmit}>
      <div className='input__lable'>
        <label htmlFor='search'>Your destination or hotel name</label>
      </div>
      <section className='form-desktop__wrapper'>
        <div className='sbar__first'>
          <InputSearch value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <button id='sendForm' type='submit'>
          Search
        </button>
      </section>
    </form>
  );
}
