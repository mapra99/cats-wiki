import React from 'react';

const BreedDescription = ({breedName, breedDescription, breedImage}) => (
  <div className="breed-description">
    <div className="img-wrap">
      <img src={breedImage} alt={`A cute picture of a ${breedName} cat`} />
    </div>
    <div className="text-wrap">
      <h2 className="title breed-name">{breedName}</h2>
      <p className="description">{breedDescription}</p>
    </div>
  </div>
);

export default BreedDescription;
