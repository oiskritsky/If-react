import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Index';
import Title from '../components/Title';
import Form from '../components/Form/Form';
import Market from '../components/Market';
import HotelSection from '../components/HotelSection/HotelSection';

import './Reset.css';
import './App.css';

export default function App() {
  const [hotelSearchData, setHotelSearchData] = useState('');

  // Recomendation data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Search data
  const [searchedData, setSearchData] = useState([]);
  useEffect(() => {
    if (hotelSearchData) {
      const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
      url.searchParams.set('search', `${hotelSearchData}`);
      fetch(`${url}`)
        .then((response) => response.json())
        .then((result) => {
          setSearchData(result);
        })
        .catch((err) => {
          console.log('Поисковый запрос не прошел', err);
        });
    }
  }, [hotelSearchData]);

  const searchedHotels = searchedData.filter(
    (item) =>
      !(item.name.toLowerCase().indexOf(hotelSearchData.toLowerCase()) === -1) ||
      !(item.city.toLowerCase().indexOf(hotelSearchData.toLowerCase()) === -1) ||
      !(item.country.toLowerCase().indexOf(hotelSearchData.toLowerCase()) === -1)
  );

  return (
    <>
      <main className='main'>
        <Header />
        <Title />
        <Form hotelSearchData={hotelSearchData} setHotelSearchData={setHotelSearchData} />
        <Market />
      </main>
      {!!searchedHotels.length && <HotelSection title='Available Hotels' data={searchedHotels} />}
      {!!data.length && <HotelSection title='Homes Guest Loves' data={data} />})
    </>
  );
}
