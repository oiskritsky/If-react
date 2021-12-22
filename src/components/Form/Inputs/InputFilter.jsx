import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SelectAge from './Select/SelectAge';

export default function InputFilter({ people, setPeople, isDisabled, setDisabled, age, setAge }) {
  const [adults, setAdults] = useState(people.adults);
  const [kids, setKids] = useState(people.kids);
  const [rooms, setRooms] = useState(people.rooms);

  function addSelector() {
    setAge([...age, { id: Date.now(), value: 0 }]);
  }
  function removeSelector() {
    setAge(age.slice(0, -1));
  }

  const minusAdults = () => {
    setAdults(adults - 1);
  };
  const plusAdults = () => {
    setAdults(adults + 1);
  };

  const minusKids = () => {
    setKids(kids - 1);
    removeSelector();
  };
  const plusKids = () => {
    setKids(kids + 1);
    addSelector();
  };

  const minusRooms = () => {
    setRooms(rooms - 1);
  };
  const plusRooms = () => {
    setRooms(rooms + 1);
  };
  useEffect(() => {
    if (adults <= 1) {
      setDisabled({ ...isDisabled, adultsMinusBtn: true });
    } else if (adults >= 30) {
      setDisabled({ ...isDisabled, adultsPlusBtn: true });
    } else if (adults >= 1 || adults <= 30) {
      setDisabled({ ...isDisabled, adultsMinusBtn: false, adultsPlusBtn: false });
    }
    setPeople({ ...people, adults });
  }, [adults]);

  useEffect(() => {
    if (rooms <= 1) {
      setDisabled({ ...isDisabled, roomsMinusBtn: true });
    } else if (rooms >= 30) {
      setDisabled({ ...isDisabled, roomsPlusBtn: true });
    } else if (rooms >= 1 || rooms <= 30) {
      setDisabled({ ...isDisabled, roomsMinusBtn: false, roomsPlusBtn: false });
    }
    setPeople({ ...people, rooms });
  }, [rooms]);

  useEffect(() => {
    if (kids <= 0) {
      setDisabled({ ...isDisabled, kidsMinusBtn: true });
    } else if (kids >= 10) {
      setDisabled({ ...isDisabled, kidsPlusBtn: true });
    } else if (kids >= 0 || kids <= 10) {
      setDisabled({ ...isDisabled, kidsMinusBtn: false, kidsPlusBtn: false });
    }
    setPeople({ ...people, kids });
  }, [kids]);

  return (
    <div className='form-desktop-people__picker'>
      <div className='picker__adults'>
        <span>
          <label htmlFor='adults'>Adults</label>
        </span>
        <div className='picker-people_count'>
          <button
            type='button'
            disabled={isDisabled.adultsMinusBtn}
            className={isDisabled.adultsPlusBtn ? 'disabled' : ''}
            value='-'
            onClick={minusAdults}>
            -
          </button>
          <input value={adults} id='adults' type='text' readOnly />
          <button
            type='button'
            disabled={isDisabled.adultsPlusBtn}
            className={isDisabled.adultsPlusBtn ? 'disabled' : ''}
            value='+'
            onClick={plusAdults}>
            +
          </button>
        </div>
      </div>

      <div className='picker__kids'>
        <span>
          <label htmlFor='kids'>Children</label>
        </span>
        <div className='picker-people_count'>
          <button
            type='button'
            disabled={isDisabled.kidsMinusBtn}
            className={isDisabled.kidsPlusBtn ? 'disabled' : ''}
            value='-'
            onClick={minusKids}>
            -
          </button>
          <input value={kids} id='kids' type='text' readOnly />
          <button
            type='button'
            disabled={isDisabled.kidsPlusBtn}
            className={isDisabled.kidsPlusBtn ? 'disabled' : ''}
            value='+'
            onClick={plusKids}>
            +
          </button>
        </div>
      </div>

      <div className='picker__rooms'>
        <span>
          <label htmlFor='rooms'>Rooms</label>
        </span>
        <div className='picker-people_count'>
          <button
            type='button'
            disabled={isDisabled.roomsMinusBtn}
            className={isDisabled.roomsPlusBtn ? 'disabled' : ''}
            value='-'
            onClick={minusRooms}>
            -
          </button>
          <input value={rooms} id='rooms' type='text' readOnly />
          <button
            type='button'
            disabled={isDisabled.roomsPlusBtn}
            className={isDisabled.roomsPlusBtn ? 'disabled' : ''}
            value='+'
            onClick={plusRooms}>
            +
          </button>
        </div>
      </div>
      {age.length !== 0 ? <SelectAge age={age} /> : <></>}
    </div>
  );
}

InputFilter.propTypes = {
  age: PropTypes.array.isRequired,
  setAge: PropTypes.func.isRequired,
  isDisabled: PropTypes.object.isRequired,
  setDisabled: PropTypes.func.isRequired,
  setPeople: PropTypes.func.isRequired,
  people: PropTypes.object.isRequired,
};
