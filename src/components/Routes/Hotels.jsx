import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HotelSection from '../HotelSection/HotelSection';
import HotelCard from '../HotelSection/HotelCard';

export default function Hotels({ data, searchedHotels }) {
  return (
    <Routes>
      <Route
        index
        element={
          searchedHotels.length ? (
            <HotelSection title='Available Hotels' data={searchedHotels} />
          ) : (
            !!data.length && <HotelSection title='Homes Guest Loves' data={data} />
          )
        }
      />
      <Route path='hotels/:id' element={<HotelCard />} />
    </Routes>
  );
}

Hotels.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchedHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
