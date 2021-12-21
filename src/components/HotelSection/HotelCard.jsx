import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import backbutton from '../../assets/images/svg/backbutton.svg';

export default function HotelCard() {
  const params = useParams();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const url = new URL(`https://fe-student-api.herokuapp.com/api/hotels/${params.id}`);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
      })
      .catch((err) => console.log(err.message));
  }, [params.id]);

  return (
    <>
      <div className='hotel-card-wrapper'>
        <div className='hotel-card-text-wrapper'>
          <div className='hotel-card-text'>
            <h2 className=''>{cardData?.name}</h2>
            <p className=''>
              {cardData?.city}, {cardData?.country}
            </p>
          </div>
          <div className='hotel-card-button-wrapper'>
            <Link to='/'>
              <img className='hotel-card-button' src={backbutton} alt='backbutton' />
            </Link>
          </div>
        </div>
        <div>
          <img className='hotel-card-img' src={cardData?.imageUrl} alt={cardData?.name} />
        </div>
      </div>
    </>
  );
}
