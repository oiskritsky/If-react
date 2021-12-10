import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function InputDate({ dateRange, setDateRange }) {
  const [startDate, setStartDate] = useState(dateRange.startDate);

  const [endDate, setEndDate] = useState(dateRange.endDate);

  const getDateChange = (currentDate) => {
    const [startDatePick, endDatePick] = currentDate;
    setStartDate(startDatePick);
    setEndDate(endDatePick);
  };

  useEffect(() => {
    setDateRange({ ...dateRange, startDate });
  }, [startDate]);

  useEffect(() => {
    setDateRange({ ...dateRange, endDate });
  }, [endDate]);

  return (
    <>
      <label className='input__lable' htmlFor='datePicker'>
        Check-in-Check-out{' '}
      </label>
      <DatePicker
        id='datePicker'
        placeholderText='Check-in — Check-out'
        selectsRange
        monthsShown={2}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        onChange={getDateChange}
      />
    </>
  );
}
InputDate.propTypes = {
  setDateRange: PropTypes.func.isRequired,
  dateRange: PropTypes.object.isRequired,
};
