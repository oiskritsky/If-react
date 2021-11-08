import React from 'react';
import Header from './Header/Header';
import Form from './Form/Form';

export default function Main() {
  return (
    <main className='main'>
      <Header />

      <div className='main__wrapper'>
        <h1 className='main__title'>
          Discover stays
          <br />
          to live, work or just relax
        </h1>
        <Form />
      </div>

      <div className='market__links'>
        <p>
          <img src='./img/google-play-ico.svg' alt='google play market' />
        </p>
        <p>
          <img src='./img/Appstore_ico.svg' alt='appStore' />
        </p>
      </div>
    </main>
  );
}
