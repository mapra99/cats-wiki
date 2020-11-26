import React from 'react';
import '../../../styles/components/shared/breed_description/Summary.scss';

const Summary = ({name, description}) => (
  <div className="summary">
    <h2 className="title breed-name">{name}</h2>
    <p className="description">{description}</p>
  </div>
);

export default Summary;
