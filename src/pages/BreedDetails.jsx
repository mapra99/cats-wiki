import React from 'react';

import BreedDescriptionContainer from '../components/shared/breed_description/BreedDescriptionContainer';

import '../styles/pages/BreedDetails.scss';

const BreedDetails = ({match: {params: {breedId: breedId}}}) => (
  <div className="breed-details">
    <BreedDescriptionContainer
      breedId={breedId}
      showDetails={true} />
  </div>
)

export default BreedDetails;
