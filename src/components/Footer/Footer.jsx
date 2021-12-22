import React from 'react';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__info'>
        <ul>
          <li>
            <span>About</span>
          </li>
          <li>
            <a href='/'>How Triphouse works</a>
          </li>
          <li>
            <a href='/'>Careers</a>
          </li>
          <li>
            <a href='/'>Privacy</a>
          </li>
          <li>
            <a href='/'>Terms</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>Property types</span>
          </li>
          <li>
            <a href='/'>Guest houses</a>
          </li>
          <li>
            <a href='/'>Hotels</a>
          </li>
          <li>
            <a href='/'>Apartments</a>
          </li>
          <li>
            <a href='/'>Villas</a>
          </li>
          <li>
            <a href='/'>Holiday homes</a>
          </li>
          <li>
            <a href='/'>Hostels</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>Support</span>
          </li>
          <li>
            <a href='/'>Contact Customer Service</a>
          </li>
          <li>
            <a href='/'>FAQ</a>
          </li>
        </ul>
      </div>
      <p className='footer__text'>&#xA9; 2020 Triphouse, Inc. All rights reserved</p>
    </div>
  );
}
