import React, { useState } from 'react';
import Header from './Header/Header';
import Title from './Header/Title/Title';
import Form from './Form/Form';
import Market from './Market/Market';
import Recommend from '../Recommend/Recommend';

import data from '../../mock/data';

export default function Main() {
  const [hotelSearchData, setHotelSearchData] = useState('');

  const filteredHotels = data.filter(
    (item) =>
      !(item.name.toLowerCase().indexOf(hotelSearchData.toLowerCase()) === -1) ||
      !(item.city.toLowerCase().indexOf(hotelSearchData.toLowerCase()) === -1) ||
      !(item.country.toLowerCase().indexOf(hotelSearchData.toLowerCase()) === -1)
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
      {!!hotelSearchData.length && !!filteredHotels.length && (
        <Recommend title='Available Hotels' data={filteredHotels} />
      )}
    </>
  );
}
