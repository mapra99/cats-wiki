import React from 'react';

import SearchIcon from '../../../assets/icons/SearchIcon';
import SpinnerIcon from '../../../assets/icons/SpinnerIcon';

import '../../../styles/components/shared/cat_search_cta/Input.scss';

const Input = ({searchTerm, searchLoading, onSubmit, onChange}) => (
  <form onSubmit={onSubmit} className='input-wrap'>
    <input onChange={onChange} type='text' placeholder='Enter your breed' name="searchTerm" value = {searchTerm} />
    <button className='button search-button' type='submit'>
      {searchLoading ?
        <SpinnerIcon className='icon loading-icon' /> :
        <SearchIcon className='icon search-icon' /> }
    </button>
  </form>
)

export default Input;
