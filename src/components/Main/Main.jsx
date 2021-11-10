import React, { useState } from 'react';
import Header from './Header/Header';
import Title from './Header/Title/Title';
import Form from './Form/Form';
import Market from './Market/Market';
import Available from '../AvailableHotels/Available';

import data from '../../mock/data';

export default function Main() {
  const [hotelSearchData, setHotelSearchData] = useState('');

  const filteredHotels = data.filter(
    (item) =>
      !(item.name.indexOf(hotelSearchData) === -1) ||
      !(item.city.indexOf(hotelSearchData) === -1) ||
      !(item.country.indexOf(hotelSearchData) === -1)
  );
  return (
    <>
      <main className='main'>
        <Header />
        <div className='main__wrapper'>
          <Title />
          <Form hotelSearchData={hotelSearchData} setHotelSearchData={setHotelSearchData} />
        </div>
        <Market />
      </main>
      {!!hotelSearchData.length && <Available filteredHotels={filteredHotels} />}
    </>
  );
}
