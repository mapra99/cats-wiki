import React from 'react';
import Logo from './Logo';
import '../../styles/components/shared/PageFooter.scss';


const PageFooter = () => (
  <div className='footer'>
    <a href='/'>
      <Logo />
    </a>
    <div className='authorship'>
      &copy; Miguel Prada - devchallenge.io 2020
    </div>
  </div>
);

export default PageFooter;
