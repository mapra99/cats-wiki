import React from 'react';
import {Link} from 'react-router-dom';

import ErrorMessage from './ErrorMessage';

import '../../../styles/components/shared/cat_search_cta/Results.scss';

const Results = ({searchResults, breeds}) => {
  if (searchResults.length === 0) {
    return <ErrorMessage message="No results found. Please try again with a different search term." />
  }
  
  return (
    <ul className='search-popup search-results'>
      {searchResults.map(breedId => (
        <Link to={`/breeds/${breedId}`} key={breedId}>
          <li className="breed-result">{breeds[breedId].name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default Results;
