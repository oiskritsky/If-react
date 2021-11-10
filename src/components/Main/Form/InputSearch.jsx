import React from 'react';

export default function InputSearch({ value, onChange }) {
  return (
    <>
      <input
        id='search'
        type='text'
        name='search'
        placeholder='New-York'
        value={value}
        onChange={onChange}
      />
      <div>{console.log({ value })}</div>
    </>
  );
}
