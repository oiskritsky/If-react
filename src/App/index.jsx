import React from 'react';
import Main from '../components/Main/Main';
import Recommend from '../components/Recommend/Recommend';

import data from '../mock/data';

import './Reset.css';
import './App.css';

function App() {
  return (
    <>
      <Main />
      <Recommend title='Homes Guest Loves' data={data} />
    </>
  );
}

export default App;
