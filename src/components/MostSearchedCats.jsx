import React from 'react';

import '../styles/components/MostSearchedCats.scss';

const MostSearchedCats = () => (
  <div className='top-searches'>
    <div className='heading'>
      <div className='heading-tab'>
        <span>Most Searched Breeds</span>
        <hr />
      </div>

      <div className='heading-title'>
        <h1>66+ Breeds For you to discover</h1>
        <a className='link' href='/'>SEE MORE &rarr;</a>
      </div>
    </div>

    <ul className='top-cats-list'>
      <li className='cat-card'>
        <a href='/'>
          <img src='https://dummyimage.com/220x220/664444/fff' alt='savannah breed' />
          <span>Savannah</span>
        </a>
      </li>
      <li className='cat-card'>
        <a href='/'>
          <img src='https://dummyimage.com/220x220/664444/fff' alt='savannah breed' />
          <span>Savannah</span>
        </a>
      </li>
      <li className='cat-card'>
        <a href='/'>
          <img src='https://dummyimage.com/220x220/664444/fff' alt='savannah breed' />
          <span>Savannah</span>
        </a>
      </li>
      <li className='cat-card'>
        <a href='/'>
          <img src='https://dummyimage.com/220x220/664444/fff' alt='savannah breed' />
          <span>Savannah</span>
        </a>
      </li>
    </ul>
  </div>
);

export default MostSearchedCats;
