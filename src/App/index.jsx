import React, { useState, useEffect } from 'react';
import Main from '../components/Main/Main';
import Recommend from '../components/Recommend/Recommend';
import Sort from '../mock/bubleSort';
// import data from '../mock/data';

import './Reset.css';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const [isOver, setIsOver] = useState(false);
  const [getError, setError] = useState(false);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((result) => {
        setIsOver(true);
        setData(Sort(result));
      })
      .catch((err) => {
        setIsOver(true);
        setError(err.message);
      });
  }, []);

  if (getError) {
    console.log('Словил ошибку');
  } else if (!isOver) {
    return (
      <div>
        <h5>Loading ... ... ...</h5>
      </div>
    );
  } else {
    return (
      <>
        <Main />
        <Recommend title='Homes Guest Loves' data={data} />)
      </>
    );
  }
}
export default App;
