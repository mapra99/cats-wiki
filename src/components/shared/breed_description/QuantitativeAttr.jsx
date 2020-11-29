import React from 'react';

import '../../../styles/components/shared/breed_description/QuantitativeAttr.scss';

const QuantitativeAttr = ({name, value}) => (
  <div className="breed-attribute quantitative">
    <span className="name">{name}</span>
    {' '}
    <div className="value">
      <span className={`score ${value >= 1 ? "active" : "inactive"}`}/>
      <span className={`score ${value >= 2 ? "active" : "inactive"}`}/>
      <span className={`score ${value >= 3 ? "active" : "inactive"}`}/>
      <span className={`score ${value >= 4 ? "active" : "inactive"}`}/>
      <span className={`score ${value >= 5 ? "active" : "inactive"}`}/>
    </div>
  </div>
)

export default QuantitativeAttr;
