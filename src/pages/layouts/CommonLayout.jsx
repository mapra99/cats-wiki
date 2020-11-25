import React from 'react';
import '../../styles/pages/layouts/CommonLayout.scss';
import Logo from '../../components/shared/Logo';
import PageFooter from '../../components/shared/PageFooter';

const CommonLayout = ({ children }) => (
  <div className='main'>
    <div className='logo-wrap'>
      <a href='/'>
        <Logo />
      </a>
    </div>
    { children }
    <div className='footer-wrap'>
      <PageFooter />
    </div>
  </div>
);

export default CommonLayout;
