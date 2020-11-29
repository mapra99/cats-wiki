import React from 'react';
import {Link} from 'react-router-dom';

import CatCard from '../../shared/CatCard';

import '../../../styles/components/home/most_searched_cats/BreedCards.scss';

const BreedCards = ({targetBreeds, breeds}) => (
  <div className='top-cats-list'>
    {targetBreeds.map(breed_id => (
      <Link key={breed_id} to={`/breeds/${breed_id}`} className="cat-link">
        <CatCard
          catName={breeds[breed_id].name}
          catImage={breeds[breed_id].images[0]}
          altAttribute={`Cute snapshot of a ${breeds[breed_id].name} cat`}/>
      </Link>
    ))}
  </div>
)

export default BreedCards;
