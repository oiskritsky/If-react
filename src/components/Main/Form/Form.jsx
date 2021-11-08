import React from 'react';

export default function Form() {
  return (
    <form className='form__desktop'>
      <div className='input__lable'>
        <label htmlFor='search'>Your destination or hotel name</label>
        <label htmlFor='in'>Check-in-</label>
        <label htmlFor='out'>Check-out</label>
      </div>
      <section className='form-desktop__wrapper'>
        <div className='sbar__first'>
          <input id='search' type='text' name='search' placeholder='New-York' />
        </div>
        <div className='sbar__second'>
          <div>
            <input type='date' id='in' />
            <input type='date' id='out' />
          </div>
        </div>
        <div className='sbar__third'>
          <input type='text' name='filter' className='people-picker' placeholder='' />
        </div>
        <button id='sendForm' type='submit'>
          Search
        </button>
      </section>
      <div className='form-desktop-people__picker'>
        <div className='picker__adults'>
          <span>
            <label htmlFor='adults'>Adults</label>
          </span>
          <div className='picker-people_count'>
            <button type='button' className='minus' value='-'>
              -
            </button>
            <input id='adults' type='text' value='0' />
            <button type='button' className='plus' value='+'>
              +
            </button>
          </div>
        </div>
        <div className='picker__children'>
          <span>
            <label htmlFor='children'>Children</label>
          </span>
          <div className='header__people_count'>
            <button type='button' className='minus' value='-'>
              -
            </button>
            <input id='children' type='text' value='0' />
            <button type='button' className='plus' value='+'>
              +
            </button>
          </div>
        </div>
        <div className='picker__rooms'>
          <span>
            <label htmlFor='rooms'>Rooms</label>
          </span>
          <div className='header__people_count'>
            <button type='button' className='minus' value='-'>
              -
            </button>
            <input id='rooms' type='text' value='0' />
            <button type='button' className='plus' value='+'>
              +
            </button>
          </div>
        </div>
        <div className='picker__age'>
          <span>
            <label htmlFor='age'>What is the age of the child you’re travelling with?</label>
          </span>
          <select id='age'>
            <option value='0'>0 years old</option>
            <option value='1'>1 years old</option>
            <option value='2'>2 years old</option>
            <option value='3'>3 years old</option>
            <option value='4'>4 years old</option>
            <option value='5'>5 years old</option>
            <option value='6'>6 years old</option>
            <option value='7'>7 years old</option>
            <option value='8'>8 years old</option>
            <option value='9'>9 years old</option>
            <option value='10'>10 years old</option>
            <option value='11'>11 years old</option>
            <option value='12'>12 years old</option>
            <option value='13'>13 years old</option>
            <option value='14'>14 years old</option>
            <option value='15'>15 years old</option>
            <option value='16'>16 years old</option>
            <option value='17'>17 years old</option>
          </select>
        </div>
      </div>
    </form>
  );
}
