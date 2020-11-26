import React from 'react';

import Summary from './Summary';
import FurtherDetails from './FurtherDetails';
import CatCard from '../CatCard';

import '../../../styles/components/shared/breed_description/BreedDescription.scss';

const BreedDescription = ({name, description, image, attributes = {}}) => (
  <div className="breed-description">
    <CatCard
      catImage={image}
      altAttribute={`A cute picture of a ${name} cat`} />

    <div className="text-wrap">
      <Summary
        name={name}
        description={description} />
      
      {attributes && (
        <FurtherDetails {...attributes} />
      )}
    </div>
  </div>
);

export default BreedDescription;
