import React from 'react';
import Logo from './Logo';
import '../styles/components/PageFooter.scss';

const PageFooter = () => (
  <div className='footer'>
    <Logo />
    <div className='authorship'>
      &copy; Miguel Prada - devchallenge.io 2020
    </div>
  </div>
);

export default PageFooter;
