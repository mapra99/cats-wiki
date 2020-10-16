import React from 'react';
import '../../styles/pages/layouts/CommonLayout.scss';

const CommonLayout = ({ children }) => (
  <div className='main'>
    { children }
  </div>
);

export default CommonLayout;
