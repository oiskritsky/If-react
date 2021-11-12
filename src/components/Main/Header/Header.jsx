import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <a href='./' aria-label='./' className='header__logo-link' />
        </div>
        <Navigation />
      </div>
    </header>
  );
}
