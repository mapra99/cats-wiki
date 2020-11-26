import React from 'react';

const QualitativeAttr = ({name, value}) => (
  <div className="breed-attribute qualitative">
    <span className="name">{name}</span>
    {' '}
    <span className="value">{value}</span>
  </div>
)

export default QualitativeAttr;
