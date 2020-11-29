import React from 'react';

import '../../../styles/components/shared/cat_search_cta/ErrorMessage.scss';

const ErrorMessage = ({message}) => (
  <div className='search-popup error-message'>
    {message || 'There was an error. Please try again later.'}
  </div>
)

export default ErrorMessage;
