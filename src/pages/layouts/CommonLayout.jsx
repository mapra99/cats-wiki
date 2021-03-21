import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/pages/layouts/CommonLayout.scss';
import Logo from '../../components/shared/Logo';
import PageFooter from '../../components/shared/PageFooter';

const CommonLayout = ({ children }) => (
  <div className='main'>
    <div className='logo-wrap'>
      <Link to='/'>
        <Logo />
      </Link>
    </div>
    { children }
    <div className='footer-wrap'>
      <PageFooter />
    </div>
  </div>
);

export default CommonLayout;
