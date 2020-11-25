import React from 'react';

import '../../styles/components/shared/CatCard.scss';

const CatCard = ({catName, catImage, altAttribute, className}) => (
  <li className={`cat-card ${className}`}>
    <a href='/'>
      <img src={catImage} alt={altAttribute || ''} />
      <span>
        {catName}
      </span>
    </a>
  </li>
)

export default CatCard;
