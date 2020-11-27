import React from 'react';

import '../../styles/components/shared/CatCard.scss';

const CatCard = ({catName, catImage, altAttribute, className}) => (
  <div className={`cat-card ${className}`}>
    <img src={catImage} alt={altAttribute || ''} />
    {catName && (
      <span>
        {catName}
      </span>
    )}
  </div>
)

export default CatCard;
