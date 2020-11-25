import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import '../../styles/components/shared/PageFooter.scss';


const PageFooter = () => (
  <div className='footer'>
    <Link to='/'>
      <Logo />
    </Link>
    <div className='authorship'>
      &copy; Miguel Prada - devchallenge.io 2020
    </div>
  </div>
);

export default PageFooter;
