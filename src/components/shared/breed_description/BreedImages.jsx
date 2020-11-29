import React from 'react';

import CatCard from '../CatCard';

import '../../../styles/components/shared/breed_description/BreedImages.scss';

const BreedImages = ({images}) => (
  <div className="breed-images">
    <h2>Other photos</h2>
    <div className="images-collection">
      {images.map(image => (
        <CatCard key={image} catImage={image} />
      ))}
    </div>
  </div>
)

export default BreedImages;
