import React from 'react';

import './styles/SpinnerIcon.scss';

const SpinnerIcon = ({className}) => (
  <div className={`lds-dual-ring ${className}`}></div>
)

export default SpinnerIcon;
