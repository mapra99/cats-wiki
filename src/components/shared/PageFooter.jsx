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
      <strong>CatWiki - 2020</strong>
      <br />
      This project is open sourced. If you like it, follow it and 
      <a href="https://github.com/mapra99/cats-wiki"> contribute here!</a>
    </div>
  </div>
);

export default PageFooter;
