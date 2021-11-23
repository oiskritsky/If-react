import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputSearchHotel from './Inputs/InputSearchHotel';
import InputDate from './Inputs/InputDate';
import InputPeople from './Inputs/InputPeople';
import InputFilter from './Inputs/InputFilter';

export default function Form({ hotelSearchData, setHotelSearchData }) {
  const [destination, setDestination] = useState(hotelSearchData);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [age, setAge] = useState([]);

  const [people, setPeople] = useState({
    adults: 1,
    kids: 0,
    kidsAge: [],
    rooms: 1,
  });
  const [filter, setFilter] = useState(false);
  const [isDisabled, setDisabled] = useState({
    adultsMinusBtn: true,
    adultsPlusBtn: false,
    kidsMinusBtn: false,
    kidsPlusBtn: false,
    roomsMinusBtn: true,
    roomsPlusBtn: false,
  });

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
        <div className='sbar__third'>
          <InputPeople
            value={people}
            onClick={() => {
              setFilter(!filter);
            }}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <input type='submit' id='sendForm' />
      </section>
      {filter && (
        <InputFilter
          people={people}
          setPeople={setPeople}
          age={age}
          setAge={setAge}
          isDisabled={isDisabled}
          setDisabled={setDisabled}
          readOnly
        />
      )}
    </form>
  );
}

Form.propTypes = {
  hotelSearchData: PropTypes.string.isRequired,
  setHotelSearchData: PropTypes.func.isRequired,
};
