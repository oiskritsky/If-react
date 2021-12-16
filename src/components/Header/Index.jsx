import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='header header__wrapper'>
      <Logo />
      <Navigation />
    </header>
  );
}
