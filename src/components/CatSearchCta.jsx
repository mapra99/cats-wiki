import React from 'react';

import SearchIcon from '../assets/icons/SearchIcon';

import '../styles/components/CatSearchCta.scss';

const CatSearchCta = () => (
  <div className='cat-search-cta'>
    <div className='input-wrap'>
      <input type='text' placeholder='Enter your breed' />
      <button className='button search-button' type='button'>
        <SearchIcon className='icon search-icon' />
      </button>
    </div>
  </div>
);

export default CatSearchCta;
