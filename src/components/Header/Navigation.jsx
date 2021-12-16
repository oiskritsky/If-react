import React from 'react';

export default function Navigation() {
  return (
    <nav className='header__nav'>
      <ul className='header__list'>
        <li className='header__item'>
          <a href='./' aria-label='./' className='header__link'>
            Stays
          </a>
        </li>
        <li className='header__item'>
          <a href='./' className='header__link'>
            Attractions
          </a>
        </li>
        <li className='header__item'>
          <a href='./' aria-label='./' />
        </li>
        <li className='header__item'>
          <a href='./' aria-label='./' />
        </li>
        <li className='header__burger'>
          <a href='./' aria-label='./' />
        </li>
      </ul>
    </nav>
  );
}
